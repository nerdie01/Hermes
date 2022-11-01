import * as React from 'react';
import  * as HTTPClient from '../HTTPClient';

import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Background from '../assets/background/home.png'
import styles from './styles/Styles';

const _TextInput = (props) => {
    return (
      <TextInput
        {...props}
        editable
        maxLength={2000}
      />
    );
  }

export default function Manual({ navigation }) {
  const [text, onChangeText] = React.useState("");

  async function sendText() {
    navigation.navigate('Loading');
    HTTPClient.sendToClient(text, false);
  }

  return (
    <ImageBackground source={Background} resizeMode="cover" style={styles.background}>
        <View style={styles.containerLeft}>
        <StatusBar style="auto" />
            <Text style={styles.title}>Manual Input</Text>
            <_TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter text here...              "
                placeholderTextColor='#8A9BBD'
                multiline
                numberOfLines={12}
                selectTextOnFocus={true}
            />
            <TouchableOpacity style={styles.button} onPress={sendText}>
                <Text style={styles.buttonText}>Analyze</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}