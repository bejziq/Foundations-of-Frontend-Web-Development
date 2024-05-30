import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Contact from './pages/contacts/contact.jsx';
import Navbar from './navbar.jsx';
import Portofolio from './pages/portofolio/portofolio.jsx';
import Products from './pages/products/products.jsx';
import About from './pages/about/about.jsx';
function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}


export default App;