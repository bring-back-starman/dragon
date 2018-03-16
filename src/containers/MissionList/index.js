import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import List from 'components/List';
import Section from 'components/Section';
import FilterLinks from 'components/FilterLinks';
import MissionListWrapper from 'components/MissionListWrapper';
import { MISSIONS_QUERY } from './queries';
import MissionItem from '../../components/MissionItem';

class MissionList extends React.Component {
  static propTypes = {
    missions: PropTypes.array,
  };

  render() {
    if (this.props.error) {
      return <p>An error occurred: {this.props.error}</p>;
    }

    if (this.props.loading) {
      return <p>Loading missions...</p>;
    }

    return (
      <Section>
        <FilterLinks />
        <List
          items={this.props.data.missions}
          component={MissionItem}
          wrapper={MissionListWrapper}
          keyPath="id"
        />
      </Section>
    );
  }
}

export default graphql(MISSIONS_QUERY, {
  options: ({ type }) => ({
    variables: {
      type: type.toUpperCase(),
    },
  }),
})(MissionList);
