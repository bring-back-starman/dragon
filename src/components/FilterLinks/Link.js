import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeColor = '#2A3E5B';
const inactiveColor = 'transparent';

const Button = styled(NavLink)`
  width: 50%;
  text-align: center;
  border: 1px solid #6982a6;
  background: ${inactiveColor};
  color: rgba(255, 255, 255, 0.7);
  padding: 8px 0;
  text-decoration: none;

  &:active,
  &:focus {
    outline: 0;
  }

  &:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  &:nth-child(2) {
    border-radius: 0 10px 10px 0;
  }

  &.active {
    background: ${activeColor};
  }
`;

export default Button;
