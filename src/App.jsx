import { useState, useEffect } from 'react';
import UMBClogo from './assets/UMBCblack.png';
import './App.css';

const N8N_WEBHOOK_URL = "YOUR_N8N_WEBHOOK_URL"; // Replace with your actual n8n webhook

function App() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [sessionId, setSessionId] = useState('');

  // Create a session ID once per user session (like in your Streamlit script)
  useEffect(() => {
    setSessionId(crypto.randomUUID());
  }, []);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      const userInput = event.target.value.trim();
      if (!userInput) return;

      setMessage(userInput);
      event.target.value = ''; // Clear input

      try {
        // Send message to n8n webhook
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: userInput,
            sessionId: sessionId,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const output = Array.isArray(data) ? data[0]?.output : data.output;
          setReply(output || 'No response received.');
        } else {
          setReply(`Error: ${response.status}`);
        }
      } catch (err) {
        setReply(`⚠️ Could not connect to API: ${err.message}`);
      }
    }
  };

  return (
    <>
      <div>
        <a href="https://coeit.umbc.edu/" target="_blank" rel="noreferrer">
          <img src={UMBClogo} className="logo" alt="UMBC logo" />
        </a>
      </div>

      <div className="title">
        <h1 className="change" style={{ marginBottom: '0', paddingBottom: '0' }}>
          Welcome to PawGPT
        </h1>
        <h2 className="change">
          This bot can help answer questions relating to the CSEE department.
        </h2>
        <h2 className="return_text">
          {reply ? reply : `Answer will be here...`}
        </h2>
      </div>

      <div className="input-container">
        <textarea
          className="input_text"
          placeholder="Enter text here..."
          id="message"
          name="message"
          onKeyDown={handleKeyDown}
        ></textarea>
      </div>
    </>
  );
}

export default App;

