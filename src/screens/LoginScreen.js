import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import GoogleLogin from '../components/GoogleLogin'
import BackButton from '../components/BackButton'


const LoginScreen = () => {
  return (
    <Background>
        <BackButton />
      <Logo />
      <Header>Welcome back</Header>
      <TextInput label="Email"></TextInput>
      <TextInput label="Password"></TextInput>
      <View style={styles.forgotPassword}>
          <Text style={styles.forgot}>Forgot your password?</Text>
      </View>
      <Button mode="contained">Login</Button>
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

export default LoginScreen

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
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