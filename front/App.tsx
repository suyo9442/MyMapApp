/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput,
  useColorScheme,
  View
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [name, setName] = useState('')
  const handleChangeInput = (text: string) => {
    console.log(text)
    setName(text)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>텍스트</Text>
        <TextInput style={styles.input} value={name} onChangeText={handleChangeInput}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
    width: 100,
    height: 100,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
  },
});

export default App;
