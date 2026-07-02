import React, { useState } from 'react';
import axios from 'axios';

const OCRButton = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrResultsHtml, setOcrResultsHtml] = useState(null);

  // Set your static API key here
  const apiKey = '68bda05a-ea1f-41a0-a381-8916de986768';

  const OCR_API_URL = 'https://testapi.cloudmersive.com/ocr/image/toText';

  const handleOCR = async (file) => {
    setIsProcessing(true);

    const formData = new FormData();
    formData.append('imageFile', file);

    try {
      const response = await axios.post(OCR_API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Apikey': apiKey,
        },
      });

      const { data } = response;

      if (data) {
        debugger;
        console.log(data);
        // Process the OCR results here
        const meanConfidenceLevel = data.MeanConfidenceLevel;
        const textResult = playersDataChange(data.TextResult);
        const ocrResult = { meanConfidenceLevel, textResult };

        setOcrResultsHtml(
          <div>
            <h3>OCR Result</h3>
            <p>Mean Confidence Level: {ocrResult.meanConfidenceLevel}</p>
            <pre>{ocrResult.textResult}</pre>
          </div>
        );
      } else {
        console.error('OCR API Response Error:', data || 'Unknown error');
        setOcrResultsHtml(null);
      }
    } catch (error) {
      console.error('OCR API Error:', error);
      setOcrResultsHtml(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const playersDataChange = (dataString) => {
    // Replace 'PUBG\nMOBILE\n' and '\nContinue' with an empty string
    dataString = dataString.replace(/PUBG\nMOBILE\n/gi, '').replace(/\nContinue/gi, '');
  
    // Split the dataString by new lines
    const lines = dataString.split('\n');
  
    const dataArray = [];
    let currentRank = null;
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
  
      if (/^\d$/.test(line) || line.trim() === 'N') {
        // Process rank
        currentRank = parseInt(line) || null;
  
        // Remove the line from the array
        lines.splice(i, 1);
        i--; // Decrement the index to account for the removed line
      } else {
        // Process player name
        let playerName = line;
        let eliminations = 0;
  

        if (!playerName.includes('elimination')) {

        // Check if there is a line with eliminations
        for (let j = i+1 ; j < lines.length; j++) {
          if (lines[j].indexOf('elimination')) {
            eliminations = lines[j].replace('eliminations','').replace('elimination','').trim().replace('I','1').replace('n','0');
            // Remove the eliminations line from the array
            lines.splice(j, 1);
            break;
          }
        }
  
  
        dataArray.push({ PlayerName: playerName, Eliminations: eliminations, Rank: currentRank });
        
           currentRank =  null
           }
      }
    }
  
    return dataArray;
  };
  
  
  
  

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      handleOCR(files[0]);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      <button
        type="button"
        className="hover:bg-blue-700 darkBlue-bg rounded-none text-gray-300 py-2 px-4 w-full mr-0 browse-field"
        onClick={handleButtonClick}
      >
        {isProcessing ? 'Processing ..' : 'Upload File'}
      </button>
      <input
        id="fileInput"
        type="file"
        multiple={false}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
      {/* Display the OCR results in HTML */}
      {ocrResultsHtml}
    </div>
  );
};

export default OCRButton;
