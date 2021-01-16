import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CurrentUserChecker from "./hoc/CurrentUserChecker/CurrentUserChecker";
import { CurrentUserProvider } from "./contexts/currentUser";
import App from "./App.js";

ReactDOM.render(
  <CurrentUserProvider>
    <CurrentUserChecker>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrentUserChecker>
  </CurrentUserProvider>,
  document.getElementById("root")
);
