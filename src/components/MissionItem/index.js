import React from 'react';
import DateRange from 'date-range';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import Icon from '@fortawesome/react-fontawesome';
import {
  faClock,
  faExternalLinkAlt,
} from '@fortawesome/fontawesome-free-solid';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem 1rem;
  margin: 5px 0;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 1px 3px ${props => props.theme.colors.light};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.span`
  font-size: 1.5rem;
  color: #343434;
  font-weight: 600;
  margin-bottom: 15px;
  flex: 1 1 auto;
`;

const Outcome = styled.div`
  flex: 0 0 auto;
  margin-left: 5px;
  color: ${props => props.theme.colors.grey};
`;

const Date = styled.div`
  font-size: 1.25rem;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.dark};
`;

const Video = styled.div`
  font-size: 0.8rem;
  margin-bottom: 15px;
`;

const A = styled.a`
  box-shadow: 0 0 1px ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.dark};
  padding: 2px 8px;
  border-radius: 2px;
`;

const Description = styled.div`
  font-size: 0.9rem;
  text-align: justify;
  line-height: 1.25rem;
  color: ${props => props.theme.colors.grey};
  margin-bottom: 15px;
`;

const MissionItem = ({ item: mission, ...props }) => (
  <Wrapper>
    <Row>
      <Name>{mission.name}</Name>
      {props.match.params.type === 'past' && (
        <Outcome>{mission.outcome}</Outcome>
      )}
    </Row>
    <Date>
      <Icon icon={faClock} /> {new DateRange(mission.date).humanize()}
    </Date>
    <Description>{mission.description}</Description>
    {mission.launchVideo && (
      <Video>
        <A href={mission.launchVideo} target="_blank">
          Video <Icon icon={faExternalLinkAlt} />
        </A>
      </Video>
    )}
  </Wrapper>
);

export default withRouter(MissionItem);
