import { Formik } from 'formik';
import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import * as yup from 'yup';
import useCreateReview from './../hooks/useCreateReview';
import { useHistory } from 'react-router';

const styles = StyleSheet.create({
    submitButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
        margin: 5,
        color: 'white'
    }
});

const ReviewForm = () => {
    const [ createReview ] = useCreateReview();
    const history = useHistory();

    const initialValues = {
        username: '',
        repository: '',
        rating: '',
        review: ''
    };

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .required(),
        repository: yup
            .string()
            .required(),
        rating: yup
            .number()
            .min(0)
            .max(100)
            .required(),
        review: yup
            .string()
    });

    const onSubmit = async (values) => {
        const reviewData = {
            repositoryName: values.repository,
            ownerName: values.username,
            rating: Number(values.rating),
            text: values.review
        };
        await createReview(reviewData);
        history.push('/');
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) =>
                <View>
                    <FormikTextInput name="username" placeholder="Repository owner's username" customStyle='signInTextField' testID={'username'} />
                    <FormikTextInput name="repository" placeholder="Repository name" customStyle='signInTextField' testID={'repository'} />
                    <FormikTextInput name="rating" placeholder="Rating" customStyle='signInTextField' testID={'rating'} />
                    <FormikTextInput name="review" placeholder="Review" customStyle='signInTextField' testID={'review'} />
                    <Pressable onPress={handleSubmit} style={styles.submitButton} testID={'submitButton'}>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Send</Text>
                    </Pressable>
                </View>
            }
        </Formik>
    );
};

export default ReviewForm;