import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import {  BrowserRouter } from 'react-router-dom';
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
// import App from './App';
// import  ReactDOM  from 'react-dom/client';
// update to react 18 syntax ?
// import Root from './routes/root';
// import Directory from './pages/Directory';
// import Home from './pages/Home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home/> ,
//     },
//     {
//         path: "/Directory",
//         element: <Directory />
//     },
// ])

//     ReactDOM.createRoot(document.getElementById("root")).render(
 
//             <BrowserRouter> 
//                  <App /> 
//              </BrowserRouter> 
       
//     );


// createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} >
//         <App/>
//     </RouterProvider>



// const container = document.getElementById('root');
// const root = createRoot(container); 
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode> 
// );

// prior iterations 

//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//     );