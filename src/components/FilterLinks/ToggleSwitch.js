import React from 'react';

import Link from './Link';

const ToggleSwitch = () => (
  <React.Fragment>
    <Link to="/missions/upcoming">Upcoming</Link>
    <Link to="/missions/past">Past</Link>
  </React.Fragment>
);

export default ToggleSwitch;
