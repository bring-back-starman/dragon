import gql from 'graphql-tag';

const MISSIONS_QUERY = gql`
  query MissionQuery($type: String) {
    missions(type: $type) {
      id
      name
      launchNumber
      date {
        from
        to
        type
      }
      missionOutcome
      description
    }
  }
`;

export { MISSIONS_QUERY };
