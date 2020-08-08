import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import './style.css';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input ref={inputRef} type="text" id={name} {...rest} />
    </div>
  )
}

export default Input;
