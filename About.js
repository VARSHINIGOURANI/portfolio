import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function About() {
  return (
    <section className="container my-5 animate__animated animate__fadeInUp" style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2 className="text-primary text-center" style={{ marginBottom: '20px' }}>About Me</h2>
      <p className="lead" style={{ fontSize: '1.2rem', textAlign: 'justify' }}>HelloI am Varshini currently pursuing a Bachelor of Technology (BTech) degree in Artificial Intelligence at MLRIT. I am passionate about technology and engineering and have dedicated my academic journey to gaining in-depth knowledge in this field.I've always been fascinated by how technology shapes our world and improves our lives. My academic pursuits have allowed me to explore various aspects of Artificial Intelligence,from the fundamental principles to hands-on projects that have given me a deeper understanding of its real-world applications.As a BTech student, I consider myself a lifelong learner. I embrace challenges and enjoy solving complex problems.
 .</p>
    </section>
  );
}

export default About;
