import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Octicons, MaterialCommunityIcons } from '@expo/vector-icons'


import MainPage from '../Pages/MainPage'
import QuestListPage from '../Pages/QuestListPage';
import RankingPage from '../Pages/RankingPage';
import SettingPage from '../Pages/SettingPage';

const Tab = createBottomTabNavigator();

export default function StackNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RankingPage"
        component={RankingPage}
        options={{
          tabBarLabel: '랭킹',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="podium-gold" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="QuestListPage"
        component={QuestListPage}
        options={{
          tabBarLabel: '퀘스트',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="question" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="SettingPage"
        component={SettingPage}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}