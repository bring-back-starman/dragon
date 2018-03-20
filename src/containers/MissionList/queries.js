import gql from 'graphql-tag';

const MISSIONS_QUERY = gql`
  query MissionsQuery($type: MissionType) {
    missions(type: $type, page: 1, limit: 20) {
      id
      name
      launchNumber
      date {
        from
        to
        type
      }
      outcome
      description
    }
  }
`;

export { MISSIONS_QUERY };
