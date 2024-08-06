import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function Header() {
  return (
    <header 
      className="bg-primary text-white text-center py-5 animate__animated animate__fadeIn"
      style={{ padding: '20px', borderBottom: '2px solid #ddd' }}
    >
      <h1 
        style={{ cursor: 'pointer', textDecoration: 'underline', marginBottom: '10px' }} 
        onClick={() => window.open('https://www.linkedin.com/in/yourprofile', '_blank')}
      >
        GOURANI VARSHINI
      </h1>
      <p 
        style={{ cursor: 'pointer', fontSize: '1.2rem' }} 
        onClick={() => window.open('https://github.com/yourprofile', '_blank')}
      >
        Web Developer
      </p>
    </header>
  );
}

export default Header;
