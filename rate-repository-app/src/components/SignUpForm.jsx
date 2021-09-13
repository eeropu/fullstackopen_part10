import { Formik } from 'formik';
import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
    submitButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
        margin: 5,
        color: 'white'
    }
});

const SignUpForm = () => {
    const [ signUp ] = useSignUp();
    const [ signIn ] = useSignIn();
    const history = useHistory();

    const initialValues = {
        username: '',
        password: '',
        passwordConfirmation: '',
    };

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(1)
            .max(30)
            .required(),
        password: yup
            .string()
            .min(5)
            .max(50)
            .required(),
        passwordConfirmation: yup
            .string()
            .min(5)
            .max(50)
            .oneOf([yup.ref('password'), null])
            .required(),
    });

    const onSubmit = async (values) => {
        try {
            const data = { 
                username: values.username,
                password: values.password
            };
            await signUp(data);
            await signIn(data);
            history.push('/');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) =>
                <View>
                    <FormikTextInput name="username" placeholder="Username" customStyle='signInTextField' testID={'username'} />
                    <FormikTextInput name="password" placeholder="Password" customStyle='signInTextField' testID={'password'} secureTextEntry/>
                    <FormikTextInput name="passwordConfirmation" placeholder="Re-enter password" customStyle='signInTextField' testID={'passwordConfirmation'} secureTextEntry/>
                    <Pressable onPress={handleSubmit} style={styles.submitButton} testID={'submitButton'}>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Sign up</Text>
                    </Pressable>
                </View>
            }
        </Formik>
    );
};

export default SignUpForm;