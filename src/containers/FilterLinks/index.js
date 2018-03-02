import React from 'react';

import Link from 'containers/FilterLinks/Link';
import Wrapper from 'containers/FilterLinks/Wrapper';

class FilterLinks extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to="/missions/upcoming">Upcoming</Link>
        <Link to="/missions/past">Past</Link>
      </Wrapper>
    );
  }
}

FilterLinks.propTypes = {};

export default FilterLinks;
