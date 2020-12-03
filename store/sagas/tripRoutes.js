import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchRoutesStart,
  fetchRoutesSuccess,
  fetchRoutesFail,
} from '../reducers/tripRoutes';
import { baseURL } from '../appConstants';

export function* fetchRoutes() {
  const url = `${baseURL}routes`;
  const params = {};

  try {
    const { data: tripRoutes } = yield call([axios, 'get'], url, { params });
    yield put(fetchRoutesSuccess(tripRoutes));
  } catch (error) {
    yield put(fetchRoutesFail(error));
  }
}

export function* watchFetchRoutes() {
  while (true) {
    yield take(fetchRoutesStart);
    yield call(fetchRoutes);
  }
}