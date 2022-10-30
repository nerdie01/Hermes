import * as React from 'react';
import  * as HTTPClient from '../HTTPClient';
import * as FileSystem from 'expo-file-system';

import { Audio } from 'expo-av';

import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Background from '../assets/background/home.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/Styles';

var recording;
export var transcription, summary, emotions;

export default function Home({ navigation }) {
  const [recordingState, setRecording] = React.useState();

  async function startRecording() {
      recording = new Audio.Recording();
      console.log('Started recording');

      try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
      });

      console.log('Recording permissions granted');

      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(true);

      console.log('Recording started');
      }

      catch (error) {
      console.error('Error with recording', error);
      }
  }

  async function stopRecording() {
      console.log('Stopped recording');

      setRecording(false);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log('Recording stopped and stored at', uri);

      const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64
      });

      navigation.navigate('Loading');

      HTTPClient.sendToClient(base64, true);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.background}>
        <TouchableOpacity onPress={recordingState ? stopRecording : startRecording} style={recordingState ? styles.circleButtonActive : styles.circleButton}>
          <Icon name="microphone" size={75}>
          </Icon>
        </TouchableOpacity>
        <Text style={styles.label}>{recordingState ? 'Stop Recording' : 'Start Recording'}</Text>
        <View style={{padding: 30}} />
        <TouchableOpacity style={styles.circleButton}>
          <Icon name="keyboard-o" size={75}>
          </Icon>
        </TouchableOpacity>
        <Text style={styles.label}>Manual Input</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}