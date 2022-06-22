import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StartPage from './StartPage';

export default function MainPage({ navigation }) {
  const [start, setStart] = useState(false);

  return start ? <StartPage /> : (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato'
  }
})