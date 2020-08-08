import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import './style.css';

interface SelectOptions {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  label: string;
  name: string;
  options: SelectOptions[];
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  const selectRef = useRef(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select
        ref={selectRef}
        id={name}
        value=""
        onChange={() => {}}
        {...rest}
      >
        <option value="" disabled hidden>Selecione uma opção</option>

        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  )
}

export default Select;
