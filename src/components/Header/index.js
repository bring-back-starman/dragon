import styled from 'styled-components';

const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  background-color: ${props => props.theme.colors.primary};
  color: rgba(255, 255, 255, 0.7);
`;

Header.defaultProps = {
  theme: {
    colors: {
      primary: '#48A3F3',
    },
  },
};

export default Header;
