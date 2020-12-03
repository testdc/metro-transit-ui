import { createActions, handleActions } from 'redux-actions';

const defaultState = { error: null, data: null, isLoading: false };

export const { fetchDirectionsStart, fetchDirectionsSuccess, fetchDirectionsFail } = createActions({
  FETCH_DIRECTIONS_START: id => ({ id }),
  FETCH_DIRECTIONS_SUCCESS: tripDirections => ({ tripDirections }),
  FETCH_DIRECTIONS_FAIL: error => ({ error }),
});

export const reducer = handleActions(
  {
    [fetchDirectionsStart]: state => ({ ...state, error: null, isLoading: true }),
    [fetchDirectionsSuccess]: (state, { payload: { tripDirections } }) => ({
      error: null,
      isLoading: false,
      data: tripDirections,
    }),
    [fetchDirectionsFail]: (state, { payload: { error } }) => ({ error, isLoading: false, data: [] }),
  },
  defaultState,
);