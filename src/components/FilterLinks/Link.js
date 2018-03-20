import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  text-align: center;
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.dark};
  padding: 8px 20px;
  text-decoration: none;
  flex: 1;

  @media (min-width: 700px) {
    flex: 0;
  }

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
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

export default Link;
