import React from 'react';

import { Container } from './styles';

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  rounded?: boolean;
  transparent?: boolean;
  icon?: React.ReactNode | React.Component;
}

const ButtonWrapper: React.FC<Props> = ({
  children,
  backgroundColor = '#365A74',
  color = '#fff',
  outlined = false,
  rounded = false,
  transparent = false,
  icon,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      rounded={rounded}
      transparent={transparent}
      {...props}
    >
      {icon && icon}
      {children}
    </Container>
  );
};

export { ButtonWrapper as Button };