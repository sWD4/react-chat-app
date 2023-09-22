import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyByl1631UM_nlNN9YcnpjiN0EAVL_8WSM4",
  authDomain: "react-chat-app-8864e.firebaseapp.com",
  databaseURL: "https://react-chat-app-8864e-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-8864e",
  storageBucket: "react-chat-app-8864e.appspot.com",
  messagingSenderId: "448465603715",
  appId: "1:448465603715:web:868c08183a23ff04781fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
