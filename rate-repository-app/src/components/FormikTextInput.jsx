import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const styles = StyleSheet.create({
    errorText: {
      marginTop: 5,
      color: '#d73a4a'
    },
    signInTextField: {
      width: '100%',
      height: 50,
      fontSize: 18,
      margin: 5,
      borderWidth: 1,
      borderColor: showError ? '#d73a4a' : 'black',
      paddingLeft: 5
    }
  });

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        secureTextEntry={props.secureTextEntry}
        style={styles[props.customStyle]}
        {...props}
        testID={`${props.testID}Field`}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;