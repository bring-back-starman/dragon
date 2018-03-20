import styled from 'styled-components';

const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.12rem;

  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.dark};
  box-shadow: 0 1px 5px ${props => props.theme.colors.light};
`;

export default Header;
