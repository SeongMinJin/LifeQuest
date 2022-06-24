import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages
import MainPage from '../Pages/MainPage'
import QuestListPage from '../Pages/QuestListPage';
import RankingPage from '../Pages/RankingPage';
import SettingPage from '../Pages/SettingPage';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainPage' component={MainPage}/>
      <Stack.Screen name='QuestListPage' component={QuestListPage}/>
      <Stack.Screen name='RankingPage' component={RankingPage}/>
      <Stack.Screen name='SettingPage' component={SettingPage}/>
    </Stack.Navigator>
  )
}