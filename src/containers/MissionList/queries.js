import gql from 'graphql-tag';

const MISSIONS_QUERY = gql`
  query MissionsQuery($type: MissionType, $order: OrderType) {
    missions(type: $type, order: $order, page: 1, limit: 20) {
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
      launchVideo
      patchUrl
    }
  }
`;

export { MISSIONS_QUERY };
