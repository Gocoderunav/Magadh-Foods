import React from 'react';
import './Philosophy.css';
import { FaLightbulb, FaLeaf, FaTools, FaUsers } from 'react-icons/fa';

export const Philosophy = () => {
  return (
    // <div className="philosophy-container">
      <div className="philosophy-card">
        <h2 className="philosophy-title">Our Philosophy</h2>
        <ul className="philosophy-list">
          <li className="philosophy-item">
            <FaLightbulb className="philosophy-icon" />
            <p className="philosophy-text">Innovation with tradition</p>
          </li>
          <li className="philosophy-item">
            <FaLeaf className="philosophy-icon" />
            <p className="philosophy-text">Holistic Flavor Experience</p>
          </li>
          <li className="philosophy-item">
            <FaTools className="philosophy-icon" />
            <p className="philosophy-text">Craftsmanship in every dish</p>
          </li>
          <li className="philosophy-item">
            <FaUsers className="philosophy-icon" />
            <p className="philosophy-text">Customer-centric approach</p>
          </li>
        </ul>
      </div>
    // </div>
  );
};