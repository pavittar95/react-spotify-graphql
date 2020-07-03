import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducers from "../reducers";

export default () => {
  const store = createStore(rootReducers, compose(applyMiddleware(logger, thunk)));
  const persistor = persistStore(store);
  return { persistor, store };
};
