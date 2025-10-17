import { useState } from 'react'
import UMBClogo from './assets/UMBCblack.png'
import loading from './assets/loading.png'
import './App.css'

function load() {
  pass;
}

function App() {
  const [message, setMessage] = useState('');
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();

      //change this to a send to N8n question
      setMessage(event.target.value)
      console.log(event.target.value);

      //return a message back

    }
  };


  return (
    <>
      <div>
        <a href="https://coeit.umbc.edu/" target="_blank">
          <img src={UMBClogo} className="logo" alt="logo" />
        </a>
      </div>
      <div className = "title">
        <h1 style={{ marginBottom: '0', paddingBottom: '0' }} className = "change" >Welcome to PawGPT</h1>
        <h2 className = "change">This bot can help answer questions relating to the CSEE department.</h2>
        <h2 className="return_text">
          Answer will be here just trust me {message}
        </h2>
      </div>
      <div className="input-container">
          <textarea type="text" className="input_text" placeholder="Enter text here..." id="message" name="message" onKeyDown={handleKeyDown}></textarea>
      </div>
    </>
  )
}

export default App
