import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './stylesTheme/dark';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import './reset.css';
import { BrowserRouter } from 'react-router-dom';

const MyRootComponent = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.secondary.main,
  width: '100vw',
  height: '100vh',
}))

const AppWithTheme = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <MyRootComponent>
        <App />
      </MyRootComponent>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <AppWithTheme />
    </BrowserRouter >
  </React.StrictMode>

);
