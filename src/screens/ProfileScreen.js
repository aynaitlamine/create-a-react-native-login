import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
import BackButton from '../components/BackButton'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Button mode="contained" style={{width: 160}} onPress={()=> console.log(1)}> Logout</Button>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})