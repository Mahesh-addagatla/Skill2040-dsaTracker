import './style.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/intro/Intro';
import Problems from './problems/Problems.jsx'
import Footer from './components/footer/Footer.js';
import { Analytics } from "@vercel/analytics/react"
function Home() {
    return (
        <div className="App">

            <Analytics />
            <Intro />
            <Problems />
        </div>
    );
}

export default Home;
