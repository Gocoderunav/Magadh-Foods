

import React from 'react';
import "./Map.css";

export const Map = () => {
  const handleClick = () => {
    window.open("https://maps.app.goo.gl/Qg54WLuEoKwKnAcq8", "_blank");
  };

  return (
    <div className="map-container" onClick={handleClick}>
      <div className="map-circle">
        <div className="map-icon-container">
          <svg className="map-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C7.02 0 3 4.02 3 9c0 6.75 9 15 9 15s9-8.25 9-15c0-4.98-4.02-9-9-9zm0 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
        </div>
        <div className="map-text">View on Google Maps</div>
      </div>
    </div>
  );
};