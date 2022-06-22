import React, {  useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartPage from '../Pages/StartPage';
import MainPage from '../Pages/MainPage'

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [start, setStart] = useState(true);
  return start ? <StartPage /> : (
    <Stack.Navigator>
      <Stack.Screen name='MainPage' component={MainPage}/>
    </Stack.Navigator>
  )
}