import React from 'react';
import { Link } from 'react-router-dom';
import './style2.css';

const Footer = () => {
    return (
        <div className="footerData">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><Link to="/about-us">about us</Link></li>
                            <li><Link to="/services">our services</Link></li>
                            <li><Link to="/privacy-policy">privacy policy</Link></li>
                            <li><Link to="/affiliate-program">affiliate program</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/shipping">shipping</Link></li>
                            <li><Link to="/returns">returns</Link></li>
                            <li><Link to="/order-status">order status</Link></li>
                            <li><Link to="/payment-options">payment options</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><Link to="/shop/watch">watch</Link></li>
                            <li><Link to="/shop/bag">bag</Link></li>
                            <li><Link to="/shop/shoes">shoes</Link></li>
                            <li><Link to="/shop/dress">dress</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
