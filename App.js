import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import maisOpcoes from './src/screens/maisOpcoes';
import telaAcesso from './src/screens/telaAcesso';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
