import { Paragraph } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const Paraghraph = (props) => {
  return (
    <Paragraph style={styles.text} {...props}/>
  )
}

export default Paraghraph

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        lineHeight: 21,
        textAlign: 'center',
        marginBottom: 12,
      },
})

