import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./components/App/index.js";
import theme from "./theme.js";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/MAEAWebPage/test">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
