import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async () => {
    const payload = {
      language: 'cpp',
      code: code,
    };
    try {
      const response = await axios.post('http://localhost:4000/run', payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // Update the output state with the response data
      setOutput(response.data.output); // Access the 'output' property

    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="App">
      <div className='lang'>
        &nbsp;&nbsp;&nbsp;C++ Online Compiler
        &nbsp;&nbsp;
      </div>
      <div className='editor'>
        <textarea placeholder="Enter your code "className='text' value={code} onChange={(e) => { setCode(e.target.value) }}></textarea>
      </div>
      <div className='button-container'>
        <button className='btn' onClick={handleSubmit}>Run</button>
      </div>
      <hr />
      <div className='output'>
        <p>Output:</p>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;
