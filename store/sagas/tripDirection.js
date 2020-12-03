import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchDirectionsStart,
  fetchDirectionsSuccess,
  fetchDirectionsFail,
} from '../reducers/tripDirection';
import { baseURL } from '../appConstants';

export function* fetchDirections(id) {
  const url = `${baseURL}directions/${id}`;
  const params = {};

  try {
    const { data: tripDirections } = yield call([axios, 'get'], url, { params });
    yield put(fetchDirectionsSuccess(tripDirections));
  } catch (error) {
    yield put(fetchDirectionsFail(error));
  }
}

export function* watchFetchDirections() {
  while (true) {
    const { payload: { id } } = yield take(fetchDirectionsStart);
    yield call(fetchDirections, id);
  }
}