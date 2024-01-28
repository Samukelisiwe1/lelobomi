// src/AboutPage.js
import React from 'react';
import './App.css';
import Tupp2Image from './images/tupp2.png';

const AboutPage = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'grey'
  };

  const contentStyle = {
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: 'aqua',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  // Hover effect for the button
  buttonStyle[':hover'] = {
    backgroundColor: 'pink',
  };
  

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>About Us</h1>
        <img src={Tupp2Image} alt="Tupp2" />
        <br></br>
        <p>
         Tupperware is the products that develops, manufactor and internationally
         distributes preparation, storage and serving containers for kitchen
         and home. They are so durable by design and they can easily passwd on the next 
         generation.
        </p>
        <br></br>
        <button style={buttonStyle}>Learn More</button>
      </div>
    </div>
  );
};

export default AboutPage;
