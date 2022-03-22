import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { theme } from './src/core/theme';
import LoginScreen from './src/screens/LoginScreen';



export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LoginScreen />
      <StatusBar style="auto" />
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
