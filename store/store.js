import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import reducers from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const makeStore = (initialState) => {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  /* eslint-enable */
  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  store.runSaga = () => {
    if (store.saga) return;
    store.saga = sagaMiddleware.run(rootSaga);
  };

  store.stopSaga = async () => {
    if (!store.saga) return;
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga();
    // dispatch saga tasks
    tasks(store.dispatch);
    // Stop running and wait for the tasks to be done
    await store.stopSaga();
    // Re-run on client side
    if (!isServer) {
      store.runSaga();
    }
  };

  // Initial run
  store.runSaga();

  return store;
};

export default makeStore;