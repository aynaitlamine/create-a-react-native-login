import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import { Logo, Header, TextInput, Button, Background, BackButton } from '../components'

const ResetScreen = () => {
  return (
    <Background>
      <BackButton />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput 
        label="E-mail"
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

