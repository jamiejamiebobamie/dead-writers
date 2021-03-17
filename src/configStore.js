import reducer from "./reducers";
import * as sagas from "./sagas";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { initSagas } from "./initSagas";

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true,
          traceLimit: 25,
        })
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(reducer, enhancer);
  initSagas(sagaMiddleware);
  return store;
};

const store = configStore();

export default store;
