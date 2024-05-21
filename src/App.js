import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
