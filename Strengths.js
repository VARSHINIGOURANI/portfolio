import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function Strengths() {
  return (
    <section 
      className="container my-5 animate__animated animate__fadeInUp" 
      style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', backgroundColor: '#f0f8ff' }}
    >
      <h2 
        className="text-center" 
        style={{ color: '#007bff', marginBottom: '20px' }}
      >
        Strengths
      </h2>
      <ul 
        className="list-group" 
        style={{ listStyleType: 'disc', paddingLeft: '20px' }}
      >
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40', border: 'none' }}
        >
          Strong problem-solving skills
        </li>
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40', border: 'none' }}
        >
          Effective communication
        </li>
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40', border: 'none' }}
        >
          Quick learner
        </li>
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40', border: 'none' }}
        >
          Leadership
        </li>
        <li 
          className="list-group-item" 
          style={{ backgroundColor: '#e9ecef', color: '#343a40', border: 'none' }}
        >
          Team player
        </li>
      </ul>
    </section>
  );
}

export default Strengths;
