
import './App.css';
// src/App.js


// src/App.js
// src/App.js
import React from 'react';
import LandingPage from './components/LandingPage';
import ResumePage from './components/ResumePage';
import BMICalculationPage from './components/BMICalculationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/bmi-calculation" element={<BMICalculationPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



