import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename='https://azuma164.github.io/HirokiAzuma.me/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
