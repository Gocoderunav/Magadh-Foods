


import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';

import { Slides } from './Slides';
import { Itemsmove } from './Itemsmove';
import { Map } from './Map';
import { Arts } from './Arts';
import './Home.css';
import { Philosophy } from './Philosophy';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const VegIcon = () => {
  return (
    <div
      css={css`
        width: 24px;
        height: 24px;
        border: 2px solid #4CAF50; /* Green border */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
      `}
    >
      <div
        css={css`
          width: 10px;
          height: 10px;
          background-color: #4CAF50; /* Green dot */
          border-radius: 50%;
        `}
      ></div>
    </div>
  );
};

export const Intro = () => {
  const strings = [
    "Magadh Foods provides Quality Food",
    "Magadh Foods provides Delicious Food",
    "Magadh Foods provides Variety in Foods"
  ];

  const stringstwo = [
    "Josh Jaga de",
    "Garda Uda de !",
  ];

  const [currentColor, setCurrentColor] = useState('#FF5733');

  useEffect(() => {
    const colors = ['#FF5733', '#33FF57', '#3357FF']; // Array of colors
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setCurrentColor(colors[currentIndex]);
      currentIndex = (currentIndex + 1) % colors.length;
    }, 500); // Change color every 500ms, adjust timing as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about-us">

      <h1>Welcome to Magadh Foods</h1>
      <ReactTyped
        strings={strings}
        typeSpeed={150}
        backSpeed={100}
        loop
        className="typed-element"
        style={{ color: currentColor }}
      />
      
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
        `}
      >
        <VegIcon />
        <h3>100% Veg Food</h3>
      </div>
      <h2>About Us</h2>
      <p>
        Magadh Foods was incorporated on 06/04/2024 with the aim of bringing unexplored flavours from the Bihar and UP region to the mainstream. We take huge inspiration from all the beauty that emerged from the region, beauty in the art, in the ideas, personalities and this is a sincere effort from our side to honor one of those beauties, the beautiful food that emerged from there. We hope you will also love it as much as we do!
      </p>
      <h2>Magadh Foods</h2>
      <ReactTyped
        strings={stringstwo}
        typeSpeed={150}
        backSpeed={100}
        loop
        className="typed-element"
        style={{ color: currentColor }} // Apply the dynamic color here
      />
      
    </div>
  );
};

export const Home = () => {
  return (
    <div className="home">
      <div className="content-container">
        <Intro />
        <div className="slides-philosophy-section">
          <Slides />
          <Philosophy />
        </div>
      </div>
      <Itemsmove />
      <div className="arts-map-container">
        <Arts />
        <div className="map-container">
          <Map />
        </div>
      </div>
    </div>
  );
};
