import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import {  BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//global acess to MUI theme//
const theme = createTheme({
    palette:{
        primary:{
            main:"#360568",
            mid: "#5B2A86",
            light: "#7785AC"
        },
        secondary:{
            main: "#9AC6C5",
        },
        other: {
            main: "#A5E6BA"
        },
        text:{
            main: "white",
            secondary: "black"
        }
    }
  })

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript

root.render(        
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);

