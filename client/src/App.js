//packages/libraries
import React from "react";
import { 
    Route,
    Outlet, 
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider, 
    } from "react-router-dom";

//components & pages
import Directory from "./pages/Directory";
import AboutUs from './pages/AboutUs';
import Home from "./pages/Home";
import Messages from './pages/Messages';
import Profile from './pages/Profile'; 
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Login from './pages/Login';
import SharedLayout from "./layouts/SharedLayout";
import Error from "./pages/Error";

//hooks & functions
import { useTheme } from "@mui/material";
import {profileLoader} from "./pages/Profile";


//newer implementation to creat browser router out of function
const router = createBrowserRouter(
    createRoutesFromElements(
      //nested routes. Parent component contains shared layout and Outlet for place declared to render children
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />}  />
        <Route path="directory" element={<Directory />}  />
        <Route path="about" element={<AboutUs />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />}  loader={profileLoader}/>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element ={<Error />} />
      </ Route>
    )
  );


function App() {
  const theme = useTheme();

  return (
        <RouterProvider router={router} /> 
  );
}

export default App;
