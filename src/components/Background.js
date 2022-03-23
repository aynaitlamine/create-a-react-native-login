import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'


const Background = ({children}) => {
  return (
    <View style={styles.background}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
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