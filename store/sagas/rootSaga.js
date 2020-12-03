import { all } from 'redux-saga/effects';
import { watchFetchRoutes } from './tripRoutes';
import { watchFetchDirections } from './tripDirection';
import { watchFetchStops } from './tripStops';
import { watchFetchDetails } from './tripDetails';

export default function* rootSaga() {
  try {
    yield all([
      watchFetchRoutes(),
      watchFetchDirections(),
      watchFetchStops(),
      watchFetchDetails()
    ]);
  } catch (err) {
    console.log(err);
  }
}