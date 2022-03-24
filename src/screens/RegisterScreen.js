import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TextInput as Input, Text } from 'react-native-paper'
import { Formik } from 'formik'
import * as Yup from 'yup';
import React, {useState} from 'react'
import { signUpUser }  from '../api/auth-api';
import { theme } from '../core/theme'
import { Logo, Header, TextInput, Button, Background, GoogleLogin, SnackBar, BackButton } from '../components'

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [error, setError] = useState();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const user = {
    name: '',
    email: '',
    password: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Name is required!'),
    email: Yup.string().email('Invalid email!').required('Email is required!'),
    password: Yup.string().min(8, 'Password is too short!').required('Password is required!'),
  });

  const onRegisterPress = async (name,email, password) =>{
    const response = await signUpUser({name, email, password})
    if (response.error) {
      setError(response.error)
    } 
  } 
  return (
    <Background>
        <BackButton />
      <Logo />
      <Header>Create account</Header>
      <Formik
        initialValues={user}
        validationSchema={validationSchema}
        onSubmit={values => onRegisterPress(values.name, values.email , values.password)}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
        <>
          <TextInput 
            label="Name" 
            value={values.name} 
            onChangeText={handleChange('name')} 
            error={errors.name}
            autoCapitalize='none'
          >
          </TextInput>

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
          ></TextInput>
          <Button mode="contained" style={{ marginTop: 24 }} onPress={handleSubmit}>Sign up</Button>
        </>
      )}
      </Formik>
      <GoogleLogin />
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
      <SnackBar message={error} onDismiss={() => setError('')} />
    </Background>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
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

