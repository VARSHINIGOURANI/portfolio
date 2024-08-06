import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'; // Correct path for animate.css
import './styles.css'; // Ensure this file exists in src directory
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import About from './components/About';
import Skills from './components/Skills';
import Strengths from './components/Strengths';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Declaration from './components/Declaration';

function App() {
  return (
    <div>
      <Header />
      <PersonalDetails />
      <About />
      <Skills />
      <Strengths />
      <Certifications />
      <Contact />
      <Declaration />
    </div>
  );
}

export default App;
