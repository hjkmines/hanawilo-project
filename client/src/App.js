import React from "react";
import { Routes, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import MuiNavbar from "./components/MuiNavbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="app">
      <MuiNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
