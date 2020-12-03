import { createActions, handleActions } from 'redux-actions';

const defaultState = { error: null, data: null, isLoading: false };

export const { fetchRoutesStart, fetchRoutesSuccess, fetchRoutesFail } = createActions({
  FETCH_ROUTES_START: date => ({ date }),
  FETCH_ROUTES_SUCCESS: tripRoutes => ({ tripRoutes }),
  FETCH_ROUTES_FAIL: error => ({ error }),
});

export const reducer = handleActions(
  {
    [fetchRoutesStart]: state => ({ ...state, error: null, isLoading: true }),
    [fetchRoutesSuccess]: (state, { payload: { tripRoutes } }) => ({
      error: null,
      isLoading: false,
      data: tripRoutes,
    }),
    [fetchRoutesFail]: (state, { payload: { error } }) => ({ error, isLoading: false, data: [] }),
  },
  defaultState,
);