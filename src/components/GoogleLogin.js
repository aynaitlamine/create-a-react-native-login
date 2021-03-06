import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import { GoogleLogo } from '../assets/icons'
import { theme } from '../core/theme'

const GoogleLogin = () => {
  return (
<View style={styles.container}>
    <View style={styles.divider}>
        <Text style={styles.dividerText}>OR</Text>
    </View>  
    <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
            <GoogleLogo />
            <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
    </View>

</View>
  )
}

export default GoogleLogin

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    divider: {
        position: 'relative',
        width: '96%',
        height: 1,
        backgroundColor: theme.colors.text,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dividerText: {
        position: 'absolute',
        backgroundColor: theme.colors.tint,
        color: theme.colors.text,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    },
    button: {
        flexDirection: 'row',
        borderColor: theme.colors.google,
        backgroundColor: theme.colors.surface,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },

    buttonText: {
        paddingLeft: 12,
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 15,
    },
})