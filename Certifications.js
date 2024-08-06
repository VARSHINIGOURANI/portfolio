import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function Certifications() {
  return (
    <section 
      className="container my-5 animate__animated animate__fadeInUp" 
      style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', backgroundColor: '#f0f8ff' }}
    >
      <h2 
        className="text-center" 
        style={{ color: '#007bff', marginBottom: '20px' }}
      >
        Certifications
      </h2>
      <ul className="list-group">
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40' }}
        >
          Certification 1
          Artificial Intelligence
         Embrizon Technology - Dec2023-Jan2024
         (Virtual Internship)

        </li>
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40' }}
        >
          Certification 2
          Web Development
          Bharat Internship Nov2023-Dec2023
          (Virtual Internship)
        </li>
      </ul>
    </section>
  );
}

export default Certifications;
