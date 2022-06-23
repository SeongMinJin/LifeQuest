import React, { useEffect, useState } from 'react';
import StackNavigator from './navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

import { firebase_db } from './firebaseConfig';
import { ref, onValue, get, child } from 'firebase/database';
import Constants from 'expo-constants';

import LoadingPage from './Pages/LoadingPage'
import StartPage from './Pages/StartPage';

export default function App() {
  const user_idx = Constants.installationId;
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(true);

  const checkExist = function() {
    get(child(ref(firebase_db), `users/${user_idx}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setStart(false);
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    
    checkExist();
    setTimeout(() => {
      setLoading(false);
    }, 1000)
    
  })

  if (loading) return <LoadingPage/>
  else {
    if (start) {return <StartPage checkExist={ checkExist } />}
    else {
      return (
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      )
    }
  }
}