import React from 'react';
import Tupp1Image from './images/tupp1.png';

const App = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'grey',
    height: '350px',
  };

  const leftSectionStyle = {
    flex: 1,
  };

  const leftImageStyle = {
    width: '100%',
    maxWidth: '400px', // Set the max-width according to your design
    height: 'auto',
  };

  const rightSectionStyle = {
    flex: 1,
    padding: '0 20px',
    textAlign: 'left',
    fontSize: '30px',
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
      <div style={leftSectionStyle}>
        
        
    <img src={Tupp1Image} alt="Tupp1" />
        
      </div>
      <div style={rightSectionStyle}>
        <h1>Tupperware</h1>
        <p>Our product is the real thing ,the future of tupper is here.
          Get yours with lower prices, Amazing Tupperware for everyone!!
        </p>
        
      <button style={buttonStyle}>Learn More</button>
      </div>
    </div>
  );
};

export default App;
