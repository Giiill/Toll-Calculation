import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authReducer';
import { UserProvider } from './context/userReducer';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter >
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>

);
