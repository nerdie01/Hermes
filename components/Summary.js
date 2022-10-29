import * as Loading from './Loading';

import { Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';

import Background from '../assets/background/home.png'
import styles from './styles/Styles';

const data = [
  {
    id: '1',
    title: 'Summary',
    text: 'Summary',
  },
  {
    id: '2',
    title: 'Emotions',
    text: 'Emotions',
  },
  {
    id: '3',
    title: 'Transcription',
    text: 'Transcription',
  },
  {
    id: '1',
    title: 'Summary',
    text: 'Summary',
  },
  {
    id: '2',
    title: 'Emotions',
    text: 'Emotions',
  },
  {
    id: '3',
    title: 'Transcription',
    text: 'Transcription',
  },
];

export default function Summary() {
  console.log(Loading.emotions);

  function getLargestEmotion() {
    //get largest score in emotions
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
    <ImageBackground source={Background} resizeMode="cover" style={styles.background}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.big}>{getLargestEmotion().emoji}</Text>
          <Text style={styles.title}>{getLargestEmotion().emotion}</Text>
          <Text style={styles.label}>{Loading.summary}</Text>
          <Text style={styles.labelsmall}>{Loading.transcription}</Text>
          <SafeAreaView>
            {Loading.emotions.map((item) => {
              return (
                <SafeAreaView>
                  <Text style={styles.emolabels}>{item.emoji} {generateProgressBarASCII(item.score, 0, 20)}</Text>
                </SafeAreaView>
              );
            })}
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}