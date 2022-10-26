import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import {  BrowserRouter } from 'react-router-dom';
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript

root.render(        
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

