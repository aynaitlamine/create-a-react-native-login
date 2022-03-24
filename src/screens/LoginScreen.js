import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TextInput as Input } from 'react-native-paper'
import { Text } from 'react-native-paper'
import React, {useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { Logo, Header, TextInput, Button, Background, GoogleLogin, SnackBar, BackButton } from '../components'
import { theme } from '../core/theme'
import { loginUser } from '../api/auth-api';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [error, setError] = useState();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const user = {
    email: '',
    password: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email!').required('Email is required!'),
    password: Yup.string().min(8, 'Password is too short!').required('Password is required!'),
  });

  const onLoginPress = async (email, password) =>{
    const response = await loginUser({email, password})
    if (response.error) {
      setError(response.error)
    } 
  } 

  return (
    <Background>
        <BackButton />
      <Logo />
      <Header>Welcome back</Header>
      <Formik
        initialValues={user}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={values => onLoginPress(values.email, values.password) }
      >
        {({ handleChange, handleSubmit, handleBlur, values, errors }) => (
          <>
            <TextInput 
              label="E-mail" 
              value={values.email} 
              onChangeText={handleChange('email')} 
              error={errors.email}
              autoCapitalize='none'
            >
            </TextInput>
            <TextInput 
              label="Password" 
              value={values.password} 
              onChangeText={handleChange('password')} 
              error={errors.password} 
              secureTextEntry={passwordVisible}
              right={
                <Input.Icon name={passwordVisible ? "eye" : "eye-off"
                } onPress={() => setPasswordVisible(!passwordVisible)} />
              }
              autoCapitalize='none'
            >
            </TextInput>
          
      
            <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
            <Button mode="contained" onPress={handleSubmit}>Login</Button>
          </>
        )}
      </Formik>
      <GoogleLogin />
      <View style={styles.row}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <SnackBar message={error} onDismiss={() => setError('')} />
    </Background>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
        marginBottom: 4
    },

    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})