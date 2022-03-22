import { StyleSheet, Image, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import React from 'react'

const BackButton = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/arrow_back.png')} />
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10 + getStatusBarHeight(),
        left: 4
    },
    image: {
        width: 28,
        height: 28
    }
})