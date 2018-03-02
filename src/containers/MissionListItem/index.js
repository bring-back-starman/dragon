import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectMissionFromId } from 'store/missions/selectors';
import MissionItem from 'components/MissionItem';

class MissionListItem extends React.Component {
  static propTypes = {
    mission: PropTypes.object,
  };

  render() {
    return <MissionItem mission={this.props.mission} />;
  }
}

const mapStateToProps = createStructuredSelector({
  mission: makeSelectMissionFromId(),
});

export default connect(mapStateToProps)(MissionListItem);
