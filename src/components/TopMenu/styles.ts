import styled from 'styled-components';

import { Props } from './index';

export const Container = styled.ul<Props>`
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-right: .25rem;

  background-color: ${(props) =>
     props.backgroundColor};
  
  color: ${(props) =>
    props.color};

  padding: 15px 30px;
  text-transform: uppercase;
  font-weight: bold;

  border-radius: 10px;
  cursor: pointer;

  &:active {
    opacity: 0.7;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  ~ svg {
      padding-right: 10px;
    }

  
`;
