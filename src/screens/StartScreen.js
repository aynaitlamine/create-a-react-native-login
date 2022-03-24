import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Logo, Header, Paraghraph, Button, Background } from '../components'
import { theme } from '../core/theme'

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <Background>
        <Logo />
        <Header>Login Template</Header>
        <Paraghraph>The easiest way to start with your amazing application</Paraghraph>
        <Button mode="outlined" onPress={() => navigation.navigate("Login")}>Login</Button>
        <Button mode="contained" style={theme.colors.primary} onPress={() => navigation.navigate("Register")}>Sign up</Button>
    </Background>
  )
}

export default StartScreen

