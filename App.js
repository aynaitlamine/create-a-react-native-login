import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
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
