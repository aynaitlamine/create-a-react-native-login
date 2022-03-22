import { StyleSheet, Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
      <Image style={styles.image} source={require('../assets/logo.png')}/>
  )
}

export default Logo

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        marginBottom: 8,
      },
})