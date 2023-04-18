import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { apiService } from './ApiService';

const root = ReactDOM.createRoot(document.getElementById('root'));

const accessToken = localStorage.getItem('access_token');

apiService.setAccessToken(accessToken);

root.render((
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
));
