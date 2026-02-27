import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import './GlobalStyles.js'; // para aplicar estilo basta importar

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
