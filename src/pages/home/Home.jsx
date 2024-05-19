import './style.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/intro/Intro';
import Problems from './problems/Problems.jsx'
import Footer from './components/footer/Footer.js';

function Home() {
    return (
        <div className="App">
            <Intro />
            <Problems />
        </div>
    );
}

export default Home;
