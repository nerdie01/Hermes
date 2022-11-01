import * as React from 'react';
import  * as HTTPClient from '../HTTPClient';

import { Image, Text, View } from 'react-native';
import LoadAnim from '../assets/animations/loading.gif';
import styles from './styles/Styles';

const emotionEmojis = {
  'admiration': '🥰',
  'amusement': '😂',
  'anger': '🤬',
  'annoyance': '😡',
  'approval': '🙂',
  'caring': '🤗',
  'confusion': '😕',
  'curiosity': '🤔',
  'desire': '🤑',
  'disappointment': '🙁',
  'disagreement': '😒',
  'disgust': '🤢',
  'embarrassment': '😳',
  'excitement': '🤩',
  'fear': '😨',
  'gratitude': '😊',
  'grief': '😢',
  'joy': '😁',
  'love': '😍',
  'nervousness': '😰',
  'optimism': '🥳',
  'pride': '😀',
  'realization': '🤨',
  'relief': '😌',
  'remorse': '😞',
  'sadness': '😭',
  'surprise': '😮'
};

export var transcription, summary, emotions;

export default function Loading({ navigation }) {
  async function awaitWebsocketMessage() {
    HTTPClient.ws.onmessage = (event) => {
      const data = event.data;
      transcription = data.split('&&')[0];
      summary = data.split("&&")[1];
      emotions = JSON.parse(data.split("&&")[2]);

      console.log('Successfully received data from websocket');

      var emotions_formatted = [];
      for (var emotion in emotions) {
        if (emotion != 'neutral') {
          emotions_formatted.push({
              emoji: emotionEmojis[emotion],
              emotion: emotion,
              score: emotions[emotion]
          });
        }
      }

      emotions = emotions_formatted;
      console.log('Successfully formatted emotion data');

      navigation.navigate('Results');
    };
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {awaitWebsocketMessage()});
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={LoadAnim} />
      <Text style={styles.label}>Just a moment...</Text>
      <View style={{padding: 120}}></View>
    </View>
  );
}