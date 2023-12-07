// src/components/BMICalculationPage.js
// src/components/BMICalculationPage.js
import React, { useState } from 'react';

const BMICalculationPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const handleCalculateBMI = () => {
    // Convert weight and height to numbers
    const numericWeight = parseFloat(weight);
    const numericHeight = parseFloat(height);

    // Validate input values
    if (isNaN(numericWeight) || isNaN(numericHeight) || numericWeight < 1.0 || numericWeight > 300.0 || numericHeight < 0.1 || numericHeight > 3.0) {
      alert('Invalid input values. Please enter valid weight (1.0 - 300.0) and height (0.1 - 3.0).');
      return;
    }

    // Calculate BMI
    const bmiValue = (numericWeight / (numericHeight * numericHeight)).toFixed(1);
    setBMI(bmiValue);
  };

  return (
    <div>
      <h2>BMI Calculation</h2>
      <div>
        <label htmlFor="weight">Weight (kg): </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          step="0.1"
          min="1.0"
          max="300.0"
        />
      </div>
      <div>
        <label htmlFor="height">Height (m): </label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          step="0.01"
          min="0.1"
          max="3.0"
        />
      </div>
      <button onClick={handleCalculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI: {bmi}</p>}
    </div>
  );
};

export default BMICalculationPage;
