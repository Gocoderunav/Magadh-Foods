import React, { useState, useEffect } from 'react';
import './Career.css';
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FaTree } from 'react-icons/fa';
import imgcone from "../img/artsimg/food team.jpg";
import imgctwo from "../img/artsimg/it support.jpg";

export const Career = () => {
  const [currentImage, setCurrentImage] = useState(imgcone);
  const [description, setDescription] = useState("Join our Cooking Team");

  useEffect(() => {
    const images = [
      { src: imgcone, desc: "Join our Cooking Team" },
      { src: imgctwo, desc: "Join our IT and Support Team" }
    ];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex].src);
      setDescription(images[currentIndex].desc);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="career-page">
      <div className="career-image-container">
        <div className="career-image">
          <img src={currentImage} alt="Career Opportunities" />
          <div className="image-overlay">
            <div className="overlay-text">{description}</div>
          </div>
        </div>
      </div>
      
      <div className="career-content">
        <h1>Join Our Team</h1>
        <p>We are always looking for talented individuals to join our team. If you’re passionate, driven, and ready to make an impact, we’d love to hear from you.</p>
        
        <h2>Contact Us</h2>
        <p><FiPhone /> Phone: <a href="tel:+919385587109">9385587109</a><a>,  </a><a href="tel:+919385594702">9385594702</a></p>
        
        <p>
          <AiOutlineMail /> Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=patliputrabymagadhfoods@gmail.com" target="_blank" rel="noopener noreferrer">patliputrabymagadhfoods@gmail.com</a>
        </p>
        <p>
          <FaTree /><a href="https://linktr.ee/magadhfoods" target="_blank" rel="noopener noreferrer">Know More about us</a>
        </p>
      </div>
    </div>
  );
};

export default Career;



