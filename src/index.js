import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // PrimeReact theme
import 'primereact/resources/primereact.min.css';  // PrimeReact core styles
import 'primeicons/primeicons.css';  // PrimeIcons styles
import 'primeflex/primeflex.css';  // PrimeFlex for layout

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
