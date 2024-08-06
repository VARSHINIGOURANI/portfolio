import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function PersonalDetails() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="container my-5 animate__animated animate__fadeInUp" style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', backgroundColor: '#f0f8ff' }}>
      <h2 className="text-center" style={{ color: '#007bff', marginBottom: '20px' }}>Personal Details</h2>
      <button 
        className="btn btn-primary mb-3" 
        onClick={toggleDetails}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div className="text-center">
         
          <p style={{ fontSize: '1.1rem', color: '#343a40' }}>Email: <a href="mailto:yourmail@example.com" style={{ color: '#007bff', textDecoration: 'none' }}>varshuvarshini7700</a></p>
          <p style={{ fontSize: '1.1rem', color: '#343a40' }}>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" style={{ color: '#007bff', textDecoration: 'none' }}>Gourani Varshini</a></p>
          <p style={{ fontSize: '1.1rem', color: '#343a40' }}>GitHub: <a href="https://github.com/yourprofile" style={{ color: '#007bff', textDecoration: 'none' }}> Gourani Varshini</a></p>
        </div>
      )}
    </section>
  );
}

export default PersonalDetails;
