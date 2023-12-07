// src/components/ResumePage.js
import React, { useState } from 'react';

const ResumePage = () => {
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check if the selected file is a PDF
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setResumeFile(selectedFile);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  return (
    <div>
      <h2>Your Resume</h2>
      <p>Upload your latest resume in PDF format:</p>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {resumeFile && (
        <div>
          <p>Selected File: {resumeFile.name}</p>
          {/* You can add further functionality to handle the uploaded file */}
        </div>
      )}
    </div>
  );
};

export default ResumePage;
