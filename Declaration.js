import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function Declaration() {
  return (
    <section 
      className="container my-5 animate__animated animate__fadeInUp" 
      style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', backgroundColor: '#f0f8ff' }}
    >
      <h2 
        className="text-center" 
        style={{ color: '#007bff', marginBottom: '20px' }}
      >
        Declaration
      </h2>
      <p 
        className="text-center" 
        style={{ fontSize: '1.1rem', color: '#343a40' }}
      >
        I hereby declare that the above information is true to the best of my knowledge.
      </p>
    </section>
  );
}

export default Declaration;
