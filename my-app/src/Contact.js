import React from 'react';
import Tupp0Image from './images/tupp0.png';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>

      </div>
      <div style={{ width: '300px', marginBottom: '20px' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: 'aqua',
              color: 'green',
              padding: '5px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      <br></br>
          
      <img src={Tupp0Image} alt="Tupp0" />
      </div>
      <footer style={{ marginTop: 'auto', textAlign: 'center', padding: '10px' }}>
        &copy; 2024 Your Company. All rights reserved.
        <h2>Author: Samukelisiwe Musa</h2>
      </footer>
    </div>
  );
};

export default ContactPage;
