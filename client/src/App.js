import React from "react"; 
import Container from '@mui/material/Container';
import  Box  from "@mui/material/Box";
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
import  Home  from "./pages/Home.jsx";
import Messages from './pages/Messages';
import Profile from './pages/Profile'; //test for right navbar routing
import MUI_NAVBAR from "./components/MUI_NAVBAR";
import Footer from './components/Footer';
import { useTheme } from '@mui/material';

function App() {
    const theme = useTheme();

        return(
            <div className="app" padding='0' style={{ background: theme.palette.primary.main}}>
                <MUI_NAVBAR/>
                 {/* <Container 
                 maxWidth='xl'
                 sx={{
                    marginY: 2,
                    p: 0
                 }}
                 >  */}
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
                {/* </Container > */}
                <Footer />
            </div>
        )
}

export default App;