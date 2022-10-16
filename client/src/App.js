import React from "react"; 
import ReactDom from 'react-dom/client';
import Container from '@mui/material/Container';
import { 
    createBrowserRouter,
    RouterProvider, 
    Route,
    Routes,
} from 'react-router-dom';
import Directory from "./pages/Directory";
import AboutUs from './pages/AboutUs';
import  Home  from "./pages/Home";
import Messages from './pages/Messages';
import Profile from './pages/Profile'; //test for right navbar routing
import MUI_NAVBAR from "./components/MUI_NAVBAR";
import Footer from './components/Footer';
import './App.css';
import { Box } from "@mui/material";
// import { Box } from "@mui/material";

function App() {
        return(
            <Box className='app' bgcolor={'lightblue'}>
                {/* <Container > */}
                    <MUI_NAVBAR />
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/directory' element={ <Directory /> } />
                        {/* route for each individual within the directory - using a dynamic variable */}
                            {/* <Route path='/directory/:id' element={ <Directory /> } /> */}
                        <Route path='/about' element={ <AboutUs /> } />
                        <Route path='/messages' element ={ <Messages /> } />
                        <Route path='/profile' element={ <Profile /> } /> 
                        {/* <Route path='*' element={<NotFound />} default error not found page */}
                    </Routes>
                    <Footer />
            </Box>
            // </div>

        )
}

export default App;