import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    margin: 5,
    color: 'white'
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required(),
  password: yup
    .string()
    .required()
});

const SignIn = () => {

  const [ signIn ] = useSignIn();
  const history = useHistory();

  const initialValues = {
    username: '',
    password: ''
  };

  const onSubmit = async (values) => {
    try {
      await signIn(values);
      history.push('/');      
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => 
        <View>
          <FormikTextInput name="username" placeholder="Username" customStyle='signInTextField'/>
          <FormikTextInput name="password" placeholder="Password" customStyle='signInTextField' secureTextEntry/>
          <Pressable onPress={handleSubmit} style={styles.submitButton}>
            <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Sign in</Text>
          </Pressable>
        </View>
      }
    </Formik>
  );
};

export default SignIn;