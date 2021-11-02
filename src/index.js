import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Topbar';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Topbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
