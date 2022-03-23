import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button mode="contained" style={{width: 160}}>Press me</Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})