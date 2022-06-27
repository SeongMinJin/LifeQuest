import { Center } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Touchable } from 'react-native';

import { firebase_db } from '../firebaseConfig';
import { ref, onValue, get, child } from 'firebase/database';

import QuestCard from '../components/QuestCard';

export default function QuestListPage() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    get(child(ref(firebase_db), 'quests')).then((snapshot) => {
      setQuests(snapshot.val());
    })
  })
  return (
    <ScrollView style={styles.container}>
      {
        quests.map((content, i) => {
          return (
            <QuestCard content={content} key={i} />
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})