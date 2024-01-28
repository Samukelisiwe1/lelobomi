// src/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>t</div>
      <nav style={navStyle}>
        <ul style={listStyle}>
          <li style={listItemStyle}>Home</li>
          <li style={listItemStyle}>About</li>
          <li style={listItemStyle}>Services</li>
          <li style={listItemStyle}>Contact</li>
          <li style={listItemStyle}>Footer</li>
        </ul>
      </nav>
    </header>
  );
};

// Inline styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: 'purple',
  color: 'blacj',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const navStyle = {
  flex: 1,
  textAlign: 'right',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const listItemStyle = {
  display: 'inline-block',
  margin: '0 10px',
};

export default Header;