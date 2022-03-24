import { StyleSheet, Text, View } from 'react-native'
import { Snackbar as Bar } from 'react-native-paper'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import React from 'react'
import { theme } from '../core/theme'


const SnackBar = ({ type = 'error', message, onDismiss }) => {
  return (
    <View style={styles.container}>
      <Bar
        visible={!!message}
        duration={3000}
        onDismiss={onDismiss}
        style={{
          backgroundColor:
            type === 'error' ? theme.colors.error : theme.colors.success,
        }}
      >
        <Text style={styles.content}>{message}</Text>
      </Bar>
    </View>
  )
}

export default SnackBar

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 100 + getStatusBarHeight(),
      width: '100%',
    },
    content: {
      fontWeight: '500',
    },
  })