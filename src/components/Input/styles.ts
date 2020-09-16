import styled from 'styled-components';

import { Props, ILabel } from './index';

export const Container = styled.input<Props>`
`;

export const Label = styled.label<ILabel>`
  display: flex;
  position: relative;
  margin-bottom: 2rem;

  > input {
    background-color: ${(props) => (props.icon ? '#D2DFEA' : 'none')};
    border: none;
    border-radius: 9999px;

    padding: 16px;
    padding-left: ${(props) => (props.icon ? '40px' : '16px')};

    color: #fff;
    font-size: 16px;

    transition: 180ms ease-in-out;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }

    ~ svg {
      fill: #365a74;
      position: absolute;
      right: 12px;
      top: 16px;
      width: 24px;
      height: 24px;
      transition: 180ms ease-in-out;
    }


    &:focus {
      outline: 0;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
       
       
      ~ svg {
        fill: ${(props) => props.color};
      }
    }
  }
`;
