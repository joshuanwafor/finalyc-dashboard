import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {

  apiKey: "AIzaSyCTHsmXm3cymEBtkjdsiHavyfvVHazX-kQ",

  authDomain: "finalyc-007.firebaseapp.com",

  projectId: "finalyc-007",

  storageBucket: "finalyc-007.appspot.com",

  messagingSenderId: "909371856297",

  appId: "1:909371856297:web:c16750a14d64d760fca0b8",

  measurementId: "G-VBN9FGK1CG"

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
