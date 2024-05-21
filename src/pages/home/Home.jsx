import './style.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/intro/Intro';
import Problems from './problems/Problems.jsx'
import Footer from './components/footer/Footer.js';
import { Analytics } from "@vercel/analytics/react";
import Nav from './nav/Nav.jsx';
function Home() {
    return (
        <div className="App">
            <Analytics />
            <Nav />
            <div className="main">
                <Intro />
                <Problems />
            </div>
        </div>
    );
}

export default Home;
