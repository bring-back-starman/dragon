import styled from 'styled-components';

const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  background-color: ${props => props.theme.colors.primary};
`;

Header.defaultProps = {
  theme: {
    colors: {
      primary: 'violet',
    },
  },
};

export default Header;
