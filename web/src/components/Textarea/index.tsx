import React, { TextareaHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import './style.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  label: string;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
  const textareaRef = useRef(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);


  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea ref={textareaRef} id={name} {...rest} />
    </div>
  )
}

export default TextArea;
