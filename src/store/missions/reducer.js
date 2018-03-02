const initialState = {
  byIds: {
    id1: {
      id: 'id1',
      name: 'Mission 1',
      customer: 'GovSat-1',
      vehicle: 'Falcon Heavy',
      status: 'upcoming',
      date: new Date(),
    },
    id2: {
      id: 'id2',
      name: 'Mission 2',
      customer: 'GovSat-1',
      vehicle: 'Falcon 9',
      status: 'upcoming',
      date: new Date(),
    },
    id3: {
      id: 'id3',
      name: 'bjdkblzadza',
      customer: 'GovSat-1',
      vehicle: 'Falcon 9',
      status: 'past',
      date: new Date(),
    },
  },
  ids: [],
  loading: false,
  error: null,
};

const launches = (state = initialState, action) => {
  switch (action.type) {
    // case SET_VALUE:
    //   return flow(
    //     set('value', action.value),
    //   )(state);
    default:
      return state;
  }
};

export default launches;
