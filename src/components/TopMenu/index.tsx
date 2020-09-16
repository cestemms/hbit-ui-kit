import React from 'react';

import { Container } from './styles';

export interface Props {
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  icon?: React.ReactNode | React.Component;
}

export const TopMenu: React.FC<Props> = ({
  children,
  backgroundColor = '#365A74',
  color = '#fff',
  icon,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      {icon && icon}
      {children}
    </Container>
  );
};
