import { gql } from 'apollo-boost';

const MISSIONS_QUERY = gql`
  query {
    missions {
      id
      name
      date
    }
  }
`;

export { MISSIONS_QUERY };
