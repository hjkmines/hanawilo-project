import React from "react";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
    BrowserRouter,
    //     RouterProvider, 
    Route,
    RouterProvider,
    Routes,
} from 'react-router-dom';
import Directory from "./pages/Directory";
import AboutUs from './pages/AboutUs';
import Home from "./pages/Home";
import Messages from './pages/Messages';
import Profile from './pages/Profile'; //test for right navbar routing
import Footer from './components/Footer';
import { useTheme } from '@mui/material';
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
    const theme = useTheme();

    return (
        <>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/directory' element={<Directory />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='*' element={<NotFound />} default error not found page */}
            </Routes>
            <Footer />

        </>
    )
}

export default App;
