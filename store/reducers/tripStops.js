import { createActions, handleActions } from 'redux-actions';

const defaultState = { error: null, data: null, isLoading: false };

export const { fetchStopsStart, fetchStopsSuccess, fetchStopsFail } = createActions({
  FETCH_STOPS_START: (routeId, directionId) => ({ routeId, directionId }),
  FETCH_STOPS_SUCCESS: tripStops => ({ tripStops }),
  FETCH_STOPS_FAIL: error => ({ error }),
});

export const reducer = handleActions(
  {
    [fetchStopsStart]: state => ({ ...state, error: null, isLoading: true }),
    [fetchStopsSuccess]: (state, { payload: { tripStops } }) => ({
      error: null,
      isLoading: false,
      data: tripStops,
    }),
    [fetchStopsFail]: (state, { payload: { error } }) => ({ error, isLoading: false, data: [] }),
  },
  defaultState,
);