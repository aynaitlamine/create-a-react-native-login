import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/navigation/Main';
import { theme } from './src/core/theme';

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomeScreen,
} from './src/screens'




export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
              initialRouteName="Start"
              screenOptions={{
                headerShown: false,
                
              }}
          >
              
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
