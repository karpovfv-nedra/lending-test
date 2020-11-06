import React from "react";
import ReactDOM from "react-dom";

import { MainPage } from "./pages/MainPage/MainPage";

import { context } from "@reatom/react";
import { createStore } from "@reatom/core";

import { App } from "./containers/App/App";

function Root() {
  const store = createStore({});
  return (
    <context.Provider value={store}>
      <App>
        <MainPage />
      </App>
    </context.Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
