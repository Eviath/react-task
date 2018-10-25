import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './config/store'


import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
   </Provider>,
  document.getElementById('root')
)