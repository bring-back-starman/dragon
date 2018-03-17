import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  margin: 5px 0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.7);

  &:first-child {
    border-top-width: 1px;
  }
`;

const Name = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Date = styled.div`
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 0.9rem;
`;

const MissionItem = ({ item: mission }) => (
  <Wrapper>
    <Name>{mission.name}</Name>
    <Date>{moment(mission.date.from).format('MMMM/Do/YYYY HH:ss')}</Date>
    <Description>{mission.description}</Description>
  </Wrapper>
);

export default MissionItem;
