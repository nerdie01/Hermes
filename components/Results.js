import * as Loading from './Loading';

import { Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';

import Background from '../assets/background/home.png'
import styles from './styles/Styles';

const emotionTipsDict = {
  'admiration': 'The conversation is admiring someone or something, which is great! Show support and keep the conversation going.',
  'amusement': 'Inject some humor into the conversation in a respectful way. Make a joke or tell a funny story, and take it from there.',
  'anger': 'Think about what is making you or others angry, and why. Try to understand the other person\’s perspective through communication, and then try to resolve the issue.',
  'annoyance': 'Try to back off from the conversation and take a break, and give everyone some space.',
  'approval': 'Everyone in this conversation is in agreement, which is great! Keep the conversation going.',
  'caring': 'Appreciate the other person for being there for you, and try to reciprocate the care that you are receiving.',
  'confusion': 'There seems to be some misunderstanding in this conversation! Try to clarify what you are saying, and what the other person is saying.',
  'curiosity': 'You or others desire to learn more about the topic of conversation, so ask questions and try to learn more about the topic.',
  'desire': 'You or others have a strong desire to do something, meet someone, or go somewhere. If it\'s something that you can do safely, make plans for it!',
  'disappointment': 'Think about what is making you disappointed. Is it something that the other person said? Is it something that you said? Is it something that happened in the past?',
  'disagreement': 'Think about what you are disagreeing with, and how you can resolve the disagreement peacefully.',
  'disgust': 'Try to change the topic of conversation, or take a break from the conversation.',
  'embarrassment': 'Try to change the topic of conversation, or take a break from the conversation.',
  'excitement': 'You or others are excited about the topic of conversation, which is great! Try to keep the conversation going.',
  'fear': 'Try to ease the conversation and provide support to others. If you are feeling fearful, try to think about what is making you fearful, and how you can overcome that fear.',
  'gratitude': 'Show your appreciation for others in the conversation, or try to reciprocate the gratitude that you are receiving.',
  'grief': 'Provide comfort and support, or seek out others who can provide comfort and support to you.',
  'joy': 'Everyone in this conversation is feeling happy, which is great! Keep the conversation going.',
  'love': 'Show your appreciation for others in the conversation, or try to reciprocate the love that you are receiving!',
  'nervousness': 'Try to ease the conversation and provide support to others. If you are feeling nervous, try taking a few deep breaths, and focus on an object in the room.',
  'optimism': 'Keep the conversation going naturally, and see where it goes!',
  'pride': 'Show your appreciation for others in the conversation, or try to reciprocate the pride that you are receiving!',
  'realization': 'There is a change in the conversation, and you or others are realizing something new.',
  'relief': 'It\'s great that you or others are feeling relieved! Keep the conversation going.',
  'remorse': 'Remember that everyone makes mistakes! Try to think about what you or others are feeling remorseful about, and how to move forward.',
  'sadness': 'Try to ease the conversation and provide support to others. If you are feeling sad, try to think about what is making you sad, and how you can seek out support.',
  'surprise': 'Try to think about what is surprising you, and why you are feeling surprised.',
};

export default function Results({ navigation }) {
  function getLargestEmotion() {
    var largestScore = 0;
    var largestEmotion;
    for (var i = 0; i < Loading.emotions.length; i++) {
      if (Loading.emotions[i].score > largestScore) {
        largestScore = Loading.emotions[i].score;
        largestEmotion = Loading.emotions[i];
      }
    }

    return largestEmotion;
  }

  function generateProgressBarASCII(score, min, max) {
    var progressBar = '';
    for (var i = 0; i < max; i++) {
      if (i < score * max && i > min) {
        progressBar += '█';
      } else {
        progressBar += ' ';
      }
    }
    return progressBar;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Return Home</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.big}>{getLargestEmotion().emoji}</Text>
        <Text style={styles.title}>{getLargestEmotion().emotion.charAt(0).toUpperCase() + getLargestEmotion().emotion.slice(1)}</Text>
        <Text style={styles.subtitle}>{emotionTipsDict[getLargestEmotion().emotion]}</Text>
        <Text style={styles.label}>{Loading.summary}</Text>
        <Text style={styles.labelsmall}>{Loading.transcription}</Text>
        <SafeAreaView>
          {Loading.emotions.map((item) => 
            <SafeAreaView>
              <Text style={styles.emolabels}>{item.emoji} {generateProgressBarASCII(item.score, 0, 20)}</Text>
            </SafeAreaView>
          )}
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}