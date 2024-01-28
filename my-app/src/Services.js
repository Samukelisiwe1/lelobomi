import React from 'react';
import './App.css';
import Tupp4Image from './images/tupp4.png';
import Tupp3Image from './images/tupp3.png';
import Tupp2Image from './images/tupp2.png';



const ServicePage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '150vh',
    backgroundColor: ' grey'
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px',
    width: '80%',
    maxWidth: '600px', // Adjust as needed
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: 'aqua',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
    marginBottom: '80px',
  };

  // Hover effect for the button
  buttonStyle[':hover'] = {
    backgroundColor: '#45a049',
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
      
      <img src={Tupp4Image} alt="Tupp4" />
        <div>
          <h2>Service 1</h2>
          
          <p>R90,00</p>
        </div>
      </div>
      <div style={sectionStyle}>
       
      <img src={Tupp3Image} alt="Tupp3" />
        <div>
          <h2>Service 2</h2>
          <p>R140,00</p>
        </div>
      </div>
      <div style={sectionStyle}>
      
      <img src={Tupp2Image} alt="Tupp2" />
        <div>
          <h2>Service 3</h2>
          <p>R250,00</p>
        </div>
      </div>
      <button style={buttonStyle}>Contact Us</button>
    </div>
  );
};

export default ServicePage;
