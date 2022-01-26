import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './components/redux/redux-store';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import state from './components/redux/state'

ReactDOM.render(
  // <React.StrictMode>
  // <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>,
  // </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root'),
);
