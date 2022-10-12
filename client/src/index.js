import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById("root")
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    );
// update to react 18 syntax ?

