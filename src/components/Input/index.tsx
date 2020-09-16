import React from 'react';

import { Label } from './styles';

export interface Props {
  name: string;
  value: string;
  setValue: (text: string) => void;
  type?: string;
  color?: string;
  placeholder?: string;
  icon?: React.ReactNode | React.Component;
}

export interface ILabel {
  icon?: React.ReactNode | React.Component;
}

export const Input: React.FC<Props> = ({
  name,
  type = 'text',
  color = '#003a78',
  value,
  setValue,
  placeholder,
  icon,
}) => {
  return (
    <Label htmlFor={name} color={color} icon={icon}>
      <input
        name={name}
        type={type}
        aria-label={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      {icon && icon}
    </Label>
  );
};
