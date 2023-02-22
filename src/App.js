import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Nav from './components/NavBar';
import Quote from './components/Quote';

const App = () => (
  <BrowserRouter>
    <div className="components-body">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
