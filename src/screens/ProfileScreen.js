import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Button mode="contained" style={{width: 160}}>Logout</Button>
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