import './style.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../../components/footer/Footer.jsx';
import { Analytics } from "@vercel/analytics/react";
import Nav from '../../components/nav/Nav.jsx';
import SolutionPage from '../solutionpage/SolutionPage.jsx';
function Home() {
    return (
        <div>
            <Analytics />
            <Nav />
            <div className="Solution">
                <SolutionPage />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
