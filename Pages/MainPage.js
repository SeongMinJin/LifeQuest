import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
      <Text>{userName}님 안녕하세요.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato'
  }
})