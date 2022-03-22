import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { theme } from '../core/theme'

function Header(props) {
  return (
    <Text style={styles.header} {...props}/>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        fontSize: 21,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 12,
      },
})