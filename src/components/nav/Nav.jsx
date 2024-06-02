import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import loud_btn from '../sounds/loud_btn_clk.wav';

// CustomLink Component
const CustomLink = ({ to, children, className = '' }) => {

    const sound = new Audio(loud_btn);

    const handleClick = (e) => {
        sound.play();
    };

    return (
        <Link to={`${to}`} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
};

function Nav() {
    const sound = new Audio(loud_btn);
    const handleClick = (e) => {
        sound.play();
    };
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <>
            <div className='navbar-container'>
                <div className="NavContainer">
                    <div className='logo'>
                        <img src="/images/nav/logo.jpg" alt="Logo" />
                        <h4>DSA-Tracker</h4>
                    </div>
                    <nav className='fill stroke'>
                        <li>
                            <CustomLink to='/' className='active'>
                                Home
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink to='/about'>
                                About
                            </CustomLink>
                        </li>
                        <li className='dropdown'>
                            <CustomLink to='/leaderboard'>
                                LeaderBoard
                            </CustomLink>
                        </li>
                        <li className='dropdown'>
                            <Link to='https://gvk-algorithm-visualizer.vercel.app/' className='algoVisualizer' onClick={handleClick}>
                                Algo-Visualizer
                            </Link>
                        </li>
                    </nav>
                    <div className='profile'>
                        <span className='name'>G.VenkataKousik</span>
                        <img src="/images/nav/gvk.jpg" alt="Profile" />
                    </div>
                </div>
            </div>

            <nav className='nav-responsive'>
                {showMenu && (
                    <ul className='responsive-menu'>
                        <div className='tags show'>
                            <li>
                                <CustomLink to='/' className='active'>
                                    Home
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink to='/about'>
                                    About
                                </CustomLink>
                            </li>
                            <li className='dropdown'>
                                <CustomLink to='/services'>
                                    Services
                                </CustomLink>
                            </li>
                            <li className='dropdown'>
                                <CustomLink to='/casestudies'>
                                    CaseStudies
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink to='/specialities'>
                                    Specialities
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink to='/contact'>
                                    Contact Us
                                </CustomLink>
                            </li>
                        </div>
                    </ul>
                )}
            </nav>
        </>
    );
}

export default Nav;
