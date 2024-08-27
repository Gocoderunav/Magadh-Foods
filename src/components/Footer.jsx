


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logofootnew from '../img/newlogo.jpg'; 
import { FaHome, FaUtensils, FaPhone, FaShoppingCart, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaTree } from 'react-icons/fa';
import { MdOutlineContactMail } from 'react-icons/md';
import { ImLocation2 } from "react-icons/im";
import { CiMapPin } from "react-icons/ci";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import './Footer.css';

export const Footer = () => {
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  const [isActive, setIsActive] = useState(false);
  const orderRef = useRef(null);
  const brandsRef = useRef(null);
  const colorRef = useRef(null);
  const date = new Date();

  const toggleOrderOptions = (e) => {
    e.preventDefault();
    setShowOrderOptions(!showOrderOptions);
  };

  const toggleBrands = (e) => {
    e.preventDefault();
    setShowBrands(!showBrands);
  };

  const handleClickOutside = (event) => {
    if (orderRef.current && !orderRef.current.contains(event.target)) {
      setShowOrderOptions(false);
    }
    if (brandsRef.current && !brandsRef.current.contains(event.target)) {
      setShowBrands(false);
    }
  };

  useEffect(() => {
    if (showOrderOptions || showBrands) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showOrderOptions, showBrands]);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
    setShowOrderOptions(false);
    setShowNotification(false);
    setShowBrands(false);
  };

  const handleWhatsAppMouseEnter = () => {
    setShowNotification(true);
  };

  const handleWhatsAppMouseLeave = () => {
    setShowNotification(false);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logofootnew} alt="Magadh Foods" style={{ height: "100px", width: "100px" }} />
          <h3>Magadh Foods</h3>
          <p>Bringing unexplored flavours from Bihar and UP to your plate.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><FaHome aria-label="Home" /> About Us</Link></li>
            <li><Link to="/menu"><FaUtensils aria-label="Menu" /> Menu</Link></li>
            <li><Link to="/contact"><FaPhone style={{ transform: "scaleX(-1)" }} aria-label="Contact" /> Contact Us</Link></li>
            <li><Link to="/career"><MdOutlineContactMail aria-label="Career" /> Careers</Link></li>
            <li style={{ position: "relative" }} ref={orderRef}>
              <a href="#" onClick={toggleOrderOptions} aria-label="Order">
                <FaShoppingCart /> Order Now
              </a>
              {showOrderOptions && (
                <div className="order-options-footer">
                  <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">Zomato</a>
                  <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">Swiggy</a>
                  <div
                    className="whatsapp-option"
                    ref={colorRef}
                    onMouseEnter={handleWhatsAppMouseEnter}
                    onMouseLeave={handleWhatsAppMouseLeave}
                  >
                    <FaWhatsapp color="green" size={15} />
                    <span style={{ color: "black" }}>
                      <a href="https://wa.me/9385594702" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </span>
                    {setShowOrderOptions && (
                      <div className="notification-bar">Self Pick up</div>
                    )}
                  </div>
                </div>
              )}
            </li>
            <li style={{ position: "relative" }} ref={brandsRef}>
              <a href="#" onClick={toggleBrands} aria-label="Brands">
                Our Brands
              </a>
              {showBrands && (
                <div className="brands-dropdown">
                  <a href="#patliputra">Patliputra</a>
                  <a href="#vaishali">Vaishali</a>
                  <a href="#avanti">Mithila</a>
                  <a href="#avanti">Madhubani</a>
                  <a href="#avanti">Girivrjja</a>
                
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/magadhfoods?utm_source=qr&igsh=Yml6MGd6M2h0dHls" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/QX2GMRZ5QQtFcCbv/?mibextid=qi2Omg" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@magadhfoods?si=Hkn0Cj7SwABtHUVF" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://wa.me/919385587109" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://linktr.ee/magadhfoods" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Linktree">
              <FaTree />
            </a>
            <a href="https://x.com/MagadhFoods?t=V7_he08naIWIB355cgdgFg&s=08" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Linktree">
            <FaSquareXTwitter />
            </a>
            <a href="https://maps.app.goo.gl/Qg54WLuEoKwKnAcq8" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Location">
              <ImLocation2 />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {date.getFullYear()} Magadh Foods. All rights reserved.</p>
        <p>
  <a href="https://www.upwork.com/freelancers/~0188e0554c04f976c1" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Upwork Profile">
    <FaSquareUpwork />
  </a>
  Created and Maintained by Gaurav Gangwar
</p>
        <p><CiMapPin /> Currently in Coimbatore |</p>
      

        <div className="footer-animation">
          <div className="cityscape"></div>
          <div className="scooter-container">
            <div className="scooter">🛵</div>
            <div className="smoke-trail">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="smoke-particle" style={{
                  animationDelay: `${i * 0.4}s`,
                  left: `${i * 10}px`,
                  top: `${Math.sin(i) * 10}px`
                }}>💨</span>
              ))}
            </div>
            <div className="text-container">
              <span>COMING TO YOUR CITY SOON</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
