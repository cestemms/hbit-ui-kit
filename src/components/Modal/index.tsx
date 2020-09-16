import React from 'react';

import { FullScreen, Container, Close } from './styles';
import { IoIosCloseCircle } from 'react-icons/io';

interface Props {
  open: boolean;
  setOpen: (newValue: boolean) => void;
  title: string;
}

export interface IFullScreen {
  open: boolean;
}

export const Modal: React.FC<Props> = ({
  open,
  setOpen,
  title,
  children,
  ...props
}) => {
  return (
    <FullScreen open={open}>
      <Container {...props} title="Fechar">
        <Close onClick={() => setOpen(false)}><IoIosCloseCircle/></Close>

        <h2>{title}</h2>

        {children}
      </Container>
    </FullScreen>
  );
};
