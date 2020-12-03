import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchDetailsStart,
  fetchDetailsSuccess,
  fetchDetailsFail,
} from '../reducers/tripDetails';
import { baseURL } from '../appConstants';

export function* fetchDetails(routeId, directionId, stopId) {
  const url = `${baseURL}${routeId}/${directionId}/${stopId}`;
  const params = {};

  try {
    const { data: tripDetails } = yield call([axios, 'get'], url, { params });
    yield put(fetchDetailsSuccess(tripDetails));
  } catch (error) {
    yield put(fetchDetailsFail(error));
  }
}

export function* watchFetchDetails() {
  while (true) {
    const { payload: { routeId, directionId, stopId } } = yield take(fetchDetailsStart);
    yield call(fetchDetails, routeId, directionId, stopId);
  }
}