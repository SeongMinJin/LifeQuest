import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView ,StyleSheet } from 'react-native';

export default function BottomMenu() {
  return (
    <View style={styles.bottomMenuContainer}></View>
  )
}

const styles = StyleSheet.create({
  bottomMenuContainer: {
    width: '100%',
    height: '10%',
    position: 'fixed',
    backgroundColor: 'skyblue',
    bottom: 0,
  }
})