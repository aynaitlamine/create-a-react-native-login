import { StyleSheet, Text, View } from 'react-native'
import Background from '../components/Background'
import React from 'react'
import Logo from '../components/Logo'
import Header  from '../components/Header'
import Paraghraph from '../components/Paraghraph'
import Button from '../components/Button'
import { theme } from '../core/theme'

const StartScreen = () => {
  return (
    <Background>
        <Logo />
        <Header>Login Template</Header>
        <Paraghraph>The easiest way to start with your amazing application</Paraghraph>
        <Button mode="outlined">Login</Button>
        <Button mode="contained" style={theme.colors.primary}>Sign up</Button>
    </Background>
  )
}

export default StartScreen

