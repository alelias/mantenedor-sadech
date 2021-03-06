import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router';

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
);

