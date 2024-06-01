import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Splash from "./components/Splash";
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

import Home from "./components/Home/Home";
import About from "./components/About/About";
import MainApp from './components/MainApp/MainApp';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/app" element={<Navbar />}>
        <Route path="/app" element={<MainApp/>} />
        <Route path="/app/home" element={<Home />} />
        <Route path="/app/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
