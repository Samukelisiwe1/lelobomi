// src/Footer.js

import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1em',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
