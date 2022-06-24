import { Center } from 'native-base';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuestListPage () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is RankingPage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  }
})