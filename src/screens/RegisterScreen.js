import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { theme } from '../core/theme'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import GoogleLogin from '../components/GoogleLogin'
import BackButton from '../components/BackButton'

const RegisterScreen = () => {
  const navigation = useNavigation();
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
  return (
    <Background>
        <BackButton />
      <Logo />
      <Header>Create account</Header>
      <Formik
        initialValues={user}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
        <>
          <TextInput label="Name" value={values.name} onChangeText={handleChange('name')} error={errors.name}></TextInput>
          <TextInput label="E-mail" value={values.email} onChangeText={handleChange('email')} error={errors.email}></TextInput>
          <TextInput label="Password" value={values.password} onChangeText={handleChange('password')} error={errors.password}></TextInput>
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

