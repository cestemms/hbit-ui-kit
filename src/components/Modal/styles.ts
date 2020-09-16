import styled from 'styled-components';

import { IFullScreen } from './index';

export const FullScreen = styled.div<IFullScreen>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.05);
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  z-index: 9999;

  animation: fadeModal 380ms ease-in-out 1;

  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  background-color: #fafafa;
  border-radius: 8px;

  animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;

  @keyframes slideIn {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  color: #93a1aa;

  h2 {
    color: #2b5b8e;
    margin-bottom: 28px;
  }
`;

export const Close = styled.button`
  cursor: pointer;
  align-self: flex-end;

  margin-bottom: 24px;

  color: #003278;

  background: transparent;
  border: 0;

  font-size: 25px;

  &:hover {
    filter: brightness(1.8);
  }
`;
