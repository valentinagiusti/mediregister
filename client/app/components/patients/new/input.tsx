import { InputFieldProps } from '@/app/types';
import React, { FC } from 'react';

const InputField: FC<InputFieldProps> = ({ name, type, value, onChange, onBlur, placeholder, error, touched }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full border border-gray-300 p-2 rounded"
      />
      {touched && error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default InputField;
