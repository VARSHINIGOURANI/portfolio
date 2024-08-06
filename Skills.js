import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function Skills() {
  return (
    <section 
      className="container my-5 animate__animated animate__fadeInUp" 
      style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', backgroundColor: '#f0f8ff' }}
    >
      <h2 
        className="text-center" 
        style={{ color: '#007bff', marginBottom: '20px' }}
      >
        Technical Skills
      </h2>
      <ul 
        className="list-group" 
        style={{ listStyleType: 'disc', paddingLeft: '20px' }}
      >
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40', border: 'none' }}
        >
          HTML
        </li>
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40', border: 'none' }}
        >
          CSS
        </li>
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40', border: 'none' }}
        >
          JavaScript
        </li>
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40', border: 'none' }}
        >
          React JS
        </li>
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40', border: 'none' }}
        >
          Bootstrap
        </li>
      </ul>
    </section>
  );
}

export default Skills;
