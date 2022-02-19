import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppDashboard } from './app';
// import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

function AppCover() {
 // const app = initializeApp(firebaseConfig);
  React.useEffect(() => {
    // Initialize Firebase
  }, []);
  return <App />
}


function App() {
  return (
    <div>
      <Toaster />
      <AppDashboard />
    </div>
  );
}

export default AppCover;
