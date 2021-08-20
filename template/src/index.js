import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App/index.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/MAEAWebPage/test">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
