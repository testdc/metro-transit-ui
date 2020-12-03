import {
  fetchDetailsStart,
  fetchDetailsSuccess,
  fetchDetailsFail
} from '../tripDetails';

describe('tripDetails', () => {
  let routeId, directionId, stopId;

  describe('fetchDetailsStart', () => {
    it('should create action type FETCH_DETAILS_START', () => {
      const expected = { "payload": { "directionId": 1, "routeId": 1, "stopId": 1 }, "type": "FETCH_DETAILS_START" };
      routeId = 1;
      directionId = 1;
      stopId = 1;
      const result = fetchDetailsStart(routeId, directionId, stopId);
      expect(result).toEqual(expected);
    });
  });

  describe('fetchDetailsSuccess', () => {
    it('should create action type FETCH_DETAILS_SUCCESS', () => {
      const expected = { "payload": { "tripDetails": { "data": "test" } }, "type": "FETCH_DETAILS_SUCCESS" };
      const tripDetails = { data: 'test' };
      const result = fetchDetailsSuccess(tripDetails);
      expect(result).toEqual(expected);
    });
  });

  describe('fetchDetailsFail', () => {
    it('should create action type FETCH_DETAILS_FAIL', () => {
      const expected = {"payload": {"error": {"msg": "Error"}}, "type": "FETCH_DETAILS_FAIL"};
      const error = { msg: 'Error' };
      const result = fetchDetailsFail(error);
      expect(result).toEqual(expected);
    });
  });
});