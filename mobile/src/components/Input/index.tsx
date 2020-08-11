import React, { useEffect, useRef } from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import styles from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = (
  {
  name,
  ...rest
}) => {
  const inputElementRef = useRef<any>(null);

  const {fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputElementRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputElementRef.current.setNativeProps({ text: value });
      },
    });
  });

  return <TextInput
    ref={inputElementRef}
    style={styles.input}
    keyboardAppearance="light"
    defaultValue={defaultValue}
    placeholderTextColor="#c1bccc"
    onChangeText={value => {
      inputElementRef.current.value = value;
    }}
    {...rest}
  />
}

export default Input;
