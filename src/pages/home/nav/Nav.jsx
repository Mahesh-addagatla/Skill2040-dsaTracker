import React, { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import loud_btn from '../components/sounds/loud_btn_clk.wav';

function Nav() {

    const clientUrl = process.env.CLIENT_URL;

    const [play] = useSound(loud_btn);
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className='navbar-container '>
                <div className="NavContainer">
                    <div className='logo'>
                        <img src="/images/nav/logo.jpg"></img>
                        <h4>DSA-Tracker</h4>
                    </div>
                    <nav className='fill stroke'>

                        <li>
                            <Link to={clientUrl} className='active' onClick={play}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={clientUrl} onClick={play}>
                                About
                            </Link>
                        </li>
                        <li className='dropdown'>
                            <Link to={clientUrl} onClick={play}>
                                LeaderBoard
                            </Link>
                        </li>
                        <li className='dropdown'>
                            <Link to={clientUrl} onClick={play}>
                                Contact
                            </Link>
                        </li>


                    </nav>
                    <div className='profile' onClick={play}>
                        <span className='name'>G.VenkataKousik</span>
                        <img src="/images/nav/gvk.jpg"></img>
                    </div>
                </div>

            </div >

            <nav className='nav-responsive'>
                {showMenu && (
                    <ul className='responsive-menu' >
                        <div className='tags show'>
                            <li>
                                <Link to={clientUrl} className='active' onClick={play}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={clientUrl} onClick={play}>
                                    About
                                </Link>
                            </li>
                            <li className='dropdown'>
                                <Link to={clientUrl} onClick={play}>
                                    Services
                                </Link>
                            </li>
                            <li className='dropdown'>
                                <Link to={clientUrl} onClick={play}>
                                    CaseStudies
                                </Link>
                            </li>
                            <li>
                                <Link to={clientUrl} onClick={play}>
                                    Specialities
                                </Link>
                            </li>
                            <li>
                                <Link to={clientUrl} onClick={play}>
                                    Contact Us
                                </Link>
                            </li>
                        </div>
                    </ul>

                )}

            </nav>
        </>

    )
}

export default Nav
