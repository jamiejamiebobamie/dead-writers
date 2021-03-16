import reducer from "./reducers";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true,
          traceLimit: 25,
        })
      : compose;

  // const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(reducer); //, enhancer);

  // sagaMiddleware.run(rootSaga);
  return store;
};

const store = configStore();

console.log(store);

export default store;
