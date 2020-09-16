import styled from 'styled-components';
import { lighten, darken } from 'polished';

import { Props } from './index';

export const Container = styled.button<Props>`
  background-color: ${(props) =>
    props.outlined || props.transparent ? 'transparent' : props.backgroundColor};
  
  color: ${(props) =>
    props.outlined || props.transparent ? props.backgroundColor : '#fff'};

  padding: ${(props) =>
    props.transparent ? '20px 20px' : '15px 30px'};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${(props) =>
    props.transparent ? '22px' : 'default'};

  border-radius: ${(props) =>
    props.rounded || props.transparent ? '9999px' : '4px'};
  
  border: ${(props) =>
    props.outlined ? `2px solid ${props.backgroundColor}` : 'none'};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: ${(props) =>
      props.transparent 
      ? 'none' : '0px 8px 8px rgba(0, 0, 0, 0.25)'};
    border-color: transparent;
    background-color: ${(props) =>
      props.outlined
        ? props.backgroundColor
        : props.transparent ? 'transparent' 
        : lighten(0.05, props.backgroundColor as string)};
    color: ${(props) => 
      props.transparent 
        ? lighten(0.2, props.backgroundColor as string)
        : `${props.color}`};
  }

  :active:not(:disabled) {
    box-shadow: ${(props) =>
      props.transparent 
      ? 'none' : '0px 8px 8px rgba(0, 0, 0, 0.25)'};
    background-color: ${(props) =>
      darken(0.03, props.backgroundColor as string)};
  }
`;
