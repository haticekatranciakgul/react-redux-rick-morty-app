import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Store'u import ediyoruz

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Store'u React'e sağlıyoruz */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
