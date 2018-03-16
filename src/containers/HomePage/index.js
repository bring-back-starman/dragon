// @flow
import * as React from 'react';

import Container from 'components/Container';
import Header from 'components/Header';
import MissionList from 'containers/MissionList';

type Props = {
  className?: string,
  children?: React.Node,
};

type State = {};

class HomePage extends React.PureComponent<Props, State> {
  static defaultProps = {};

  render() {
    return (
      <Container>
        <Header>Bring Back Starman</Header>
        <MissionList type={this.props.match.params.type} />
      </Container>
    );
  }
}

export default HomePage;
