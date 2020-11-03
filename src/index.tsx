import React from "react";
import ReactDOM from "react-dom";

import { MainPage } from "./pages/MainPage/MainPage";

import { context } from "@reatom/react";
import { createStore } from "@reatom/core";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { App } from "./containers/App/App";

function Root() {
  const store = createStore({});
  return (
    <App>
      <context.Provider value={store}>
        <Theme preset={presetGpnDefault}>
          <MainPage />
        </Theme>
      </context.Provider>
    </App>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
