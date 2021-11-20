import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

export const firebaseConfig = {

  apiKey: "AIzaSyAnQiA8LxAJ7gUPUSc9ePkw8mD82m-46tE",

  authDomain: "finally-xyz.firebaseapp.com",

  projectId: "finally-xyz",

  storageBucket: "finally-xyz.appspot.com",

  messagingSenderId: "153597144819",

  appId: "1:153597144819:web:11a9c6faf4152658219186",

  measurementId: "G-XP2YB8X11M"

};




const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
