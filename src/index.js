import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './app';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
