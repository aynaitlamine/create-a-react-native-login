import { StyleSheet, Text, View } from 'react-native'
import { logoutUser } from '../api/auth-api'
import { Button, BackButton } from '../components'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Button mode="contained" style={{width: 160}} onPress={logoutUser}> Logout</Button>
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