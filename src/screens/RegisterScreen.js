import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import GoogleLogin from '../components/GoogleLogin'
import BackButton from '../components/BackButton'

const RegisterScreen = () => {
  return (
    <Background>
        <BackButton />
      <Logo />
      <Header>Create account</Header>
      <TextInput label="Name"></TextInput>
      <TextInput label="Email"></TextInput>
      <TextInput label="Password"></TextInput>
      <Button mode="contained" style={{ marginTop: 24 }}>Sign up</Button>
      <GoogleLogin />
      <View style={styles.row}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
        marginBottom: 4
      },
    
      link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
      },
})

