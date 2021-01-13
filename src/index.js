import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { CurrentUserProvider } from "./contexts/currentUser";
import App from "./App.js";

ReactDOM.render(
  <CurrentUserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CurrentUserProvider>,
  document.getElementById("root")
);
