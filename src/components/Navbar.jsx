



import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaUtensils, FaPhone, FaShoppingCart, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineContactMail } from 'react-icons/md';
import newlogo from "../img/newlogo.jpg";


export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);

  const orderRef = useRef(null);
  const brandsRef = useRef(null);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
    setShowOrderOptions(false);
    setShowNotification(false);
    setShowBrandsDropdown(false); // Hide brands dropdown when closing the navbar
  };

  const toggleOrderOptions = () => {
    setShowOrderOptions(!showOrderOptions);
    setShowNotification(false);
  };

  const toggleBrandsDropdown = () => {
    setShowBrandsDropdown(!showBrandsDropdown);
  };

  const handleClickOutside = (event) => {
    if (
      orderRef.current && !orderRef.current.contains(event.target) &&
      brandsRef.current && !brandsRef.current.contains(event.target)
    ) {
      setShowOrderOptions(false);
      setShowBrandsDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo">
            <img src={newlogo} style={{ borderRadius: '50%' }} alt="Logo" />
          </Link>
        </div>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <ul className={`navbar-list ${isActive ? 'active' : ''}`}>
            <li className="navbar-item" onClick={removeActive}>
              <Link to="/" className="navbar-link hover-underline">
                <FaHome /> About Us
              </Link>
            </li>
            <li className="navbar-item" onClick={removeActive}>
              <Link to="/menu" className="navbar-link hover-underline">
                <FaUtensils /> Menu
              </Link>
            </li>
            <li className="navbar-item" onClick={removeActive}>
              <Link to="/contact" className="navbar-link hover-underline">
                <FaPhone style={{ transform: "scaleX(-1)" }} /> Contact Us
              </Link>
            </li>
            <li className="navbar-item order" onClick={toggleOrderOptions} ref={orderRef}>
              <div className="navbar-link hover-underline">
                <FaShoppingCart style={{ color: "white" }} /> <span style={{ color: "white" }}>Order Now</span>
              </div>
              {showOrderOptions && (
                <div className="order-options">
                  <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">Zomato</a>
                  <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">Swiggy</a>
                  <div
                    className="whatsapp-option"
                  >
                    <FaWhatsapp color="green" size={15} />
                    <span style={{ color: "black" }}>
                      <a href="https://wa.me/9385594702" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </span>
                    {showOrderOptions && (
                      <div className="notification-bar">Self Pick up</div>
                    )}
                  </div>
                </div>
              )}
            </li>
            <li className="navbar-item" onClick={removeActive}>
              <Link to="/career" className="navbar-link hover-underline">
                <MdOutlineContactMail /> Careers
              </Link>
            </li>
            <li className="navbar-item" onClick={toggleBrandsDropdown} ref={brandsRef}>
              <div className="navbar-link hover-underline">
                Our Brands
              </div>
              {showBrandsDropdown && (
                <ul className="dropdown">
                  <li className="dropdown-item">Patliputra</li>
                  <li className="dropdown-item">Vaishali</li>
                  <li className="dropdown-item">Mithila</li>
                  <li className="dropdown-item">Madhubani</li>
                  <li className="dropdown-item">Girivrijja</li>
                </ul>
              )}
            </li>
          </ul>

          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

