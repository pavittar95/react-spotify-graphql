import React from "react";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./styles/index.scss";

const { persistor, store } = configureStore();

const Loader = () => <div>Loading ...</div>

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter>
          <Routes store={store} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
