import React from "react";
import ReactDOM from "react-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { context } from "@reatom/react";
import { App } from "./containers/App/App";
import { store } from "./modules/app/app";

function Root() {
  return (
    <context.Provider value={store}>
      <App>
        <MainPage />
      </App>
    </context.Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
