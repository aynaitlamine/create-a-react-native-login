import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import BackButton from '../components/BackButton'

const ResetScreen = () => {
  return (
    <Background>
      <BackButton />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput 
        label="E-mail address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  )
}

export default ResetScreen

