import React from "react";
import ReactDOM from "react-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { context } from "@reatom/react";
import { App } from "./containers/App/App";
import { store } from "./modules/app/app";
import { EventInterceptorProvider, eventInterceptorMap } from "@consta/uikit/EventInterceptor";

function Root() {
  return (
      <EventInterceptorProvider eventHandler={console.log} map={eventInterceptorMap}>
          <context.Provider value={store}>
              <App>
                  <MainPage />
              </App>
          </context.Provider>
      </EventInterceptorProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
