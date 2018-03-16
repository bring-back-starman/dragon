import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeColor = 'blue';
const inactiveColor = 'transparent';

const Button = styled(NavLink)`
  width: 50%;
  text-align: center;
  border: 1px solid gray;
  background: ${inactiveColor};
  padding: 8px 0;
  color: inherit;
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
    color: white;
  }
`;

export default Button;
