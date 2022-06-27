import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuestCard({ content }) {

  return (
    <View style={styles.container}>
      <Text>{content.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5
  }
})