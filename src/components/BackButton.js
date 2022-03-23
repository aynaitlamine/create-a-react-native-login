import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
      <Image style={styles.image} source={require('../assets/arrow_back.png')} />
    </TouchableOpacity>
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