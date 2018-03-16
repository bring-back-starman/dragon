import React from 'react';

import Link from 'components/FilterLinks/Link';
import Wrapper from 'components/FilterLinks/Wrapper';

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

export default FilterLinks;
