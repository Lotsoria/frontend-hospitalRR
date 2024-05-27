import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Importar Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar estilos personalizados
import './modules/auth/css/style.css';

// Importar jQuery, Popper.js y Bootstrap JS
import 'jquery';
import 'popper.js';
import 'bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
