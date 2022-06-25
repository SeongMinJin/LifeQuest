import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from '../Pages/MainPage'
import QuestListPage from '../Pages/QuestListPage';
import RankingPage from '../Pages/RankingPage';
import SettingPage from '../Pages/SettingPage';

const Tab = createBottomTabNavigator();

export default function StackNavigator() {
  return (
    <Tab.Navigator
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;
      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? require('./assets/images/home_ch.png')
      //         : require('./assets/images/home_un.png');
      //     } else if (route.name === 'Ranking') {
      //       iconName = focused
      //         ? require('./assets/images/ranking_ch.png')
      //         : require('./assets/images/ranking_un.png');
      //     } else if (route.name === 'Statisctics') {
      //       iconName = focused
      //         ? require('./assets/images/calendar_ch.png')
      //         : require('./assets/images/calendar_un.png');
      //     } else if (route.name === 'MyPage') {
      //       iconName = focused
      //         ? require('./assets/images/user_ch.png')
      //         : require('./assets/images/user_un.png');
      //     }

      //     return (
      //       <Image source={iconName} style={{ width: 25, height: 25 }} />
      //     );
      //   },
      // })}
      >
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="QuestListPage" component={QuestListPage} />
      <Tab.Screen name="RankingPage" component={RankingPage} />
      <Tab.Screen name="SettingPage" component={SettingPage} />
    </Tab.Navigator>
  )
}