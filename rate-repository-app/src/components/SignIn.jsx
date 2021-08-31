import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';

const styles = StyleSheet.create({
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    margin: 5,
    color: 'white'
  }
});

const SignIn = () => {

  const initialValues = {
    username: '',
    password: ''
  };

  const onSubmit = (values) => {
    console.log(values.username);
    console.log(values.password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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