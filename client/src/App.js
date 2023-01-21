import React from "react";
import { 
    Route,
    Outlet, 
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider, 
    Routes} from "react-router-dom";
import Footer from "./components/Footer";
import { useTheme } from "@mui/material";
import Navbar from "./components/Navbar";
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

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout />} errorElement={<Error /> }>
        <Route index element={<Home />} errorElement={<Error /> } />
        <Route path="/directory" element={<Directory />} errorElement={<Error /> } />
        <Route path="/about" element={<AboutUs />} errorElement={<Error /> }/>
        <Route path="/messages" element={<Messages />} errorElement={<Error /> }/>
        <Route path="/profile" element={<Profile />} errorElement={<Error /> } />
        <Route path="/register" element={<Register />} errorElement={<Error /> }/>
        <Route path="/login" element={<Login />} errorElement={<Error /> }/>
        <Route path="/contact" element={<ContactUs />} errorElement={<Error /> }/>
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
