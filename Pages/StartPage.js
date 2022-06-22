import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import { app } from '../firebaseConfig';
import { getDatabase, ref, onValue, set } from 'firebase/database';

export default function StartPage({ navigation }) {

  useEffect(() => {
    const db = getDatabase(app);
    const reference = ref(db, '/');
    onValue(reference, (snapshot) => {
      console.log(snapshot.val());
    });

  })

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>안녕하세요. 저는</Text>
            <TextInput placeholder="Username" style={styles.textInput} />
            <View style={styles.btnContainer}>
              <Button title="입니다." onPress={() => null} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    width: '50%',
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
    textAlign: 'center',
    fontSize: 24
  },
  btnContainer: {
    marginTop: 12
  }
})