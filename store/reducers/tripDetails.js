import { createActions, handleActions } from 'redux-actions';

const defaultState = { error: null, data: null, isLoading: false };

export const { fetchDetailsStart, fetchDetailsSuccess, fetchDetailsFail } = createActions({
  FETCH_DETAILS_START: (routeId, directionId, stopId) => ({ routeId, directionId, stopId }),
  FETCH_DETAILS_SUCCESS: tripDetails => ({ tripDetails }),
  FETCH_DETAILS_FAIL: error => ({ error }),
});

export const reducer = handleActions(
  {
    [fetchDetailsStart]: state => ({ ...state, error: null, isLoading: true }),
    [fetchDetailsSuccess]: (state, { payload: { tripDetails } }) => ({
      error: null,
      isLoading: false,
      data: tripDetails,
    }),
    [fetchDetailsFail]: (state, { payload: { error } }) => ({ error, isLoading: false, data: [] }),
  },
  defaultState,
);