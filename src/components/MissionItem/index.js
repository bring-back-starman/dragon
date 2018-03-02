import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  border: 1px solid #000;
  border-top-width: 0;

  &:first-child {
    border-top-width: 1px;
  }
`;

const MissionItem = ({ mission }) => (
  <Wrapper>
    <p>{mission.name}</p>
    <p>{mission.vehicle}</p>
    <p>{moment(mission.date).format('HH:mm')}</p>
    <p>{mission.status}</p>
  </Wrapper>
);

export default MissionItem;
