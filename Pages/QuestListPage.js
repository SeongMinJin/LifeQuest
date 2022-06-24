import { Center } from 'native-base';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function QuestListPage ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is QuestListPage</Text>
      <View style={styles.bottomMenuContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => { navigation.navigate('RankingPage') }}></TouchableOpacity>
      </View>
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
  },
  bottomMenuContainer: {
    width: '100%',
    height: '10%',
    position: 'fixed',
    backgroundColor: 'skyblue',
    bottom: 0,
  },
  button1: {
    width: '20%',
    height: '80%',
    backgroundColor: 'green'
  }
})