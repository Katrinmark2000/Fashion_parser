import * as ReactDOM from "react-dom/client";
import App from './app/App';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);