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
  font-size: 1.125rem;
  color: #343434;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

const Date = styled.div`
  font-size: 0.825rem;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.dark};
  flex: 1;
`;

const Outcome = styled.div`
  margin-left: 5px;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.grey};
`;

const Description = styled.div`
  font-size: 0.7rem;
  text-align: justify;
  line-height: 1rem;
  color: ${props => props.theme.colors.grey};
  margin-bottom: 20px;
`;

const Video = styled.div`
  font-size: 0.625rem;
  margin-bottom: 15px;
`;

const A = styled.a`
  box-shadow: 0 0 1px ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.dark};
  padding: 2px 8px;
  border-radius: 2px;
`;

const MissionItem = ({ item: mission, ...props }) => (
  <Wrapper>
    <Name>{mission.name}</Name>
    <Row>
      <Date>
        <Icon icon={faClock} /> {new DateRange(mission.date).humanize()}
      </Date>
      {props.match.params.type === 'past' && (
        <Outcome>{mission.outcome}</Outcome>
      )}
    </Row>
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
