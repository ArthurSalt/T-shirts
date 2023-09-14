import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//Git

// To push a local branch to github type 'git push REMOTE_URL LOCAL_BRACH_NAME'
// git push https://github.com/ArthurSalt/T-shirts.git master

// Use 'git remote add CUSTOM_NAME REMOTE_URL' 
// aaaato give a shorter name for remote URL for faster access.
// git remote add origin https://github.com/ArthurSalt/T-shirts.git
