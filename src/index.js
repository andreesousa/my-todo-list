import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './Todo'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);

reportWebVitals();
