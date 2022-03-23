import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../core/theme'


const Background = ({children}) => {
  return (
    <View style={styles.background}>
        <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={0} behavior="height">
          {children}
        </KeyboardAvoidingView>
    </View>
    
  )
}

export default Background

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.tint,
      },
      container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
})