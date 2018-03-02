import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';

import { makeSelectFilteredMissionsIds } from 'store/missions/selectors';

import MissionListItem from 'containers/MissionListItem';

import List from 'components/List';
import Section from 'components/Section';
import FilterLinks from 'containers/FilterLinks';
import MissionListWrapper from 'components/MissionListWrapper';
import { MISSIONS_QUERY } from './graphql';

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
          items={this.props.missionsIds}
          component={MissionListItem}
          wrapper={MissionListWrapper}
        />
      </Section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  missionsIds: makeSelectFilteredMissionsIds(),
});

const withConnect = connect(mapStateToProps);

export default compose(withRouter, withConnect, graphql(MISSIONS_QUERY))(
  MissionList,
);
