import React from 'react'
import { ActivityIndicator } from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { app } from '../core/config'
import { Background } from '../components'
import { theme } from '../core/theme'

export default function AuthLoadingScreen() {
  const navigation = useNavigation();
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      navigation.reset({
        routes: [{ name: 'Home' }],
      })
      // ...
    } else {
      // User is signed out
      navigation.reset({
        routes: [{ name: 'Start' }],
      })
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  )
}