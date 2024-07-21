import React from 'react';
import { createRoot } from 'react-dom/client';
import MainApp from './App';
import './index.css';

const container = document.getElementById('root');
const rootElement = createRoot(container);

rootElement.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
