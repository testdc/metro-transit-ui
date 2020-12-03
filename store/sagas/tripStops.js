import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchStopsStart,
  fetchStopsSuccess,
  fetchStopsFail,
} from '../reducers/tripStops';
import { baseURL } from '../appConstants';

export function* fetchStops(routeId, directionId) {
  const url = `${baseURL}stops/${routeId}/${directionId}`;
  const params = {};

  try {
    const { data: tripStops } = yield call([axios, 'get'], url, { params });
    yield put(fetchStopsSuccess(tripStops));
  } catch (error) {
    yield put(fetchStopsFail(error));
  }
}

export function* watchFetchStops() {
  while (true) {
    const { payload: { routeId, directionId } } = yield take(fetchStopsStart);
    yield call(fetchStops, routeId, directionId);
  }
}