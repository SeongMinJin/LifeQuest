import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity ,StyleSheet } from 'react-native';
import { firebase_db } from '../firebaseConfig';
import { getDatabase, ref, onValue, get, child } from 'firebase/database';
import Constants from 'expo-constants';


export default function MainPage({ navigation }) {
  const user_idx = Constants.installationId;
  const [userName, setUserName] = useState('');
  
  

  useEffect(() => {
    get(child(ref(firebase_db), `users/${user_idx}`)).then((snapshot) => {
      setUserName(snapshot.val().username);
    })
  })
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>{userName}님 안녕하세요.</Text>
      </ScrollView>
      <View style={styles.bottomMenuContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => { navigation.navigate('QuestListPage') }}></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
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