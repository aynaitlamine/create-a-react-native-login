import { Button as PaperButton } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { theme } from '../core/theme'

const Button = ({mode, style, ...props}) => {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 5,
        paddingVertical: 2,
      },
      text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
      },
})