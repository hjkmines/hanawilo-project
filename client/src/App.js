import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";

class App extends Component {
    render() {
        return(
            <Routes>
                <Route path='/' component={ Home } />
            </Routes>
        )
    }
}

export default App;