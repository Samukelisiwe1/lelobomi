// src/App.js
import React from 'react';
import './App.css'; 
import Header from './Header';
import HomePage from './HomePage';
import About from './About';
import Services from './Services';
import Footer from './Footer';
import Contact from './Contact';



function App() {
  return (
    <div className="App">
      <Header />
      {/* Your main content goes here */}
      <HomePage />
      <About/>
      <Services/>
      <Contact/>
      <footer/>

    </div>
  );
}

export default App;