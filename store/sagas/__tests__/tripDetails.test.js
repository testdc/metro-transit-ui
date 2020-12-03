import { put, take } from 'redux-saga/effects';
import { fetchDetails, watchFetchDetails } from '../tripDetails';
import { fetchDetailsSuccess, fetchDetailsStart } from '../../reducers/tripDetails';

describe('tripDetails', () => {
  let routeId, directionId, stopId;

  describe('fetchDetails', () => {
    it('should call fetchDetailsSuccess if there is no error', () => {
      routeId = 1;
      directionId = 1;
      stopId = 1;
      let data = {
        data: 'testData'
      };
      const gen = fetchDetails(routeId, directionId, stopId);
      gen.next();
      expect(gen.next(data).value).toEqual(put(fetchDetailsSuccess('testData')));
    });
  });

  describe('watchFetchDetails', () => {
    it('should call fetchDetailsStart', () => {
      let data = {
        payload: 'testData'
      };
      const gen = watchFetchDetails();
      expect(gen.next(data).value).toEqual(take(fetchDetailsStart));
    });
  });
});