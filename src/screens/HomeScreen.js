import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { getAuth } from "firebase/auth";
import { app } from '../core/config'


const HomeScreen = () => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  return (
    <View style={styles.container}>
      <Text>{ user.displayName }</Text>
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