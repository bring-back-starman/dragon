import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

const P = styled.p`
  text-align: center;
`;

const NotFound = () => (
  <Section>
    <P>Page not found</P>
  </Section>
);

export default NotFound;
