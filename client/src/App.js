import React from "react"; 
import { Routes, Route } from 'react-router-dom';
import Directory from "./pages/Directory";
import AboutUs from './pages/AboutUs';
import  Home  from "./pages/Home";
import Messages from './pages/Messages';
import Profile from './pages/Profile'; //test for right navbar routing
import MUI_NAVBAR from "./components/MUI_NAVBAR";
// import MuiNavbar from "./components/MuiNavbar";
import Footer from './components/Footer';
// import { Box } from "@mui/material";

function App() {
        return(
            <div className='app'>
                <MUI_NAVBAR />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='Directory' element={ <Directory /> } />
                    <Route path='About' element={ <AboutUs /> } />
                    <Route path='Messages' element ={ <Messages /> } />
                    <Route path='Profile' element={ <Profile /> } /> {/* test route for right side navbar navigation  */}
                </Routes>
                <Footer />
            </div>

        )
}

export default App;