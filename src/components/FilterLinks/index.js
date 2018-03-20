import React from 'react';

import Wrapper from 'components/FilterLinks/Wrapper';
import ToggleSwitch from './ToggleSwitch';

class FilterLinks extends React.Component {
  render() {
    return (
      <Wrapper>
        <ToggleSwitch />
      </Wrapper>
    );
  }
}

export default FilterLinks;
