import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import { SearchProvider } from './contexts/SearchContext';
import { AuthContextProvider } from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
