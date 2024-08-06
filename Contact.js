import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function Contact() {
  return (
    <section 
      className="container my-5 animate__animated animate__fadeInUp" 
      style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', backgroundColor: '#f0f8ff' }}
    >
      <h2 
        className="text-center" 
        style={{ color: '#007bff', marginBottom: '20px' }}
      >
        Contact:7416376016
      </h2>
      <p 
        className="text-center" 
        style={{ fontSize: '1.1rem', color: '#343a40' }}
      >
        Email: <a href="mailto:yourmail@example.com" style={{ color: '#007bff', textDecoration: 'none' }}>varshuvarshini7700@gmail.com</a>
      </p>
    </section>
  );
}

export default Contact;
