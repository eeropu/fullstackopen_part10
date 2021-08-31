import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  signInTextField: {
    width: '100%',
    height: 20
  }
});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;