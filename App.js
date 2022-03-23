import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { getApp, initializeApp } from "firebase/app";
import { firebaseConfig } from './src/core/config'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/navigation/Main';
import { theme } from './src/core/theme';

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  AuthLoadingScreen,
} from './src/screens'



export default function App() {
  const Stack = createNativeStackNavigator();
  if (getApp().length < 1) {
    initializeApp(firebaseConfig);
    // Initialize other firebase products here
  }
  
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
              initialRouteName="AuthLoading"
              screenOptions={{
                headerShown: false,
                
              }}
          >
              <Stack.Screen name="AuthLoading" component={AuthLoadingScreen}/>
              <Stack.Screen name="Start" component={StartScreen}/>
              <Stack.Screen name="Home" component={Main}/>
              <Stack.Screen name="Login" component={LoginScreen}/>
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordScreen}
              />
          </Stack.Navigator>
          <StatusBar style="auto" />
      </NavigationContainer>     
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
