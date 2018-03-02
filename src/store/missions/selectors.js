import { createSelector } from 'reselect';
import _get from 'lodash/fp/get';
import _filter from 'lodash/fp/filter';
import _flow from 'lodash/fp/flow';
import _map from 'lodash/fp/map';

const selectState = _get('missions');

const selectFilterFromProps = (_, props) => props.match.params.filter;

const selectMissionIdFromProps = (_, props) => props.item;

const makeSelectMissionsByIds = () =>
  createSelector(selectState, _get('byIds'));

const makeSelectFilteredMissionsIds = () =>
  createSelector(
    makeSelectMissionsByIds(),
    selectFilterFromProps,
    (missions, filter) =>
      _flow(_filter({ status: filter }), _map('id'))(missions),
  );

const makeSelectMissionFromId = () =>
  createSelector(
    makeSelectMissionsByIds(),
    selectMissionIdFromProps,
    (missions, id) => _flow(_get(id))(missions),
  );

export { makeSelectFilteredMissionsIds, makeSelectMissionFromId };
