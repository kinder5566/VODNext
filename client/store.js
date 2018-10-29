import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';

import dramaReducer from './containers/Drama/reducer'
import dramaSaga from './containers/Drama/saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  dramaReducer
})

const rootSaga = function* () {
  yield all([
    dramaSaga
  ])
}

export default function(initialState, options) {

  /**
   * Since Next.js does server-side rendering, you are REQUIRED to pass`initialState`
   * when creating the store.
   */
  const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  /**
   * next-redux-saga depends on `runSagaTask` and `sagaTask` being attached to the store.
   *
   *   `runSagaTask` is used to rerun the rootSaga on the client when in sync mode (default)
   *   `sagaTask` is used to await the rootSaga task before sending results to the client
   *
   */

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(dramaSaga)
  }

  // run the rootSaga initially
  store.runSagaTask()
  return store
}
