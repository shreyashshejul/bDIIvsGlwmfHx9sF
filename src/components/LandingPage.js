// src/components/LandingPage.js
import React from 'react';
import CandidateDetails from './CandidateDetails';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <CandidateDetails />
      <hr />
      <div>
        <h2>Download Resume</h2>
        {/* Include the link to download the resume here */}
        <a href="/path/to/resume.pdf" download>
          Download Resume
        </a>
      </div>
      <hr />
      <div>
        <h2>Calculate BMI</h2>
        {/* Link to BMI Calculation Page */}
        <Link to="/bmi-calculation">BMI Calculation Page</Link>
      </div>
      <hr />
      <div>
        <h2>Your Resume</h2>
        {/* Link to Resume Page */}
        <Link to="/resume">Resume Page</Link>
      </div>
    </div>
  );
};

export default LandingPage;
