import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [speed, setSpeed] = useState(0);
  const baseIP = "192.168.4.1";

  const sendCommand = (cmd) => {
    fetch(`http://${baseIP}/${cmd}`)
      .then(() => console.log("Sent:", cmd))
      .catch((err) => console.error("Error:", err));
  };

  const updateSpeed = (val) => {
    setSpeed(val);
    sendCommand(`S${val}`);
  };

  return (
    <div className="container">
      <h1>🚗 WiFi कार कंट्रोलर</h1>
      <p>IP पता: {baseIP}</p>

      <button className="btn btn-on" onClick={() => sendCommand('ON')}>चालू करें</button>
      <button className="btn btn-off" onClick={() => sendCommand('OFF')}>बंद करें</button><br/>

      <button className="btn" onClick={() => sendCommand('F')}>⬆ आगे</button><br/>
      <button className="btn" onClick={() => sendCommand('L')}>⬅ बाएं</button>
      <button className="btn" onClick={() => sendCommand('R')}>➡ दाएं</button><br/>
      <button className="btn" onClick={() => sendCommand('B')}>⬇ पीछे</button><br/>
      <button className="btn btn-stop" onClick={() => sendCommand('S')}>⏹ रोकें</button><br/><br/>

      <label>गति: {speed}</label><br/>
      <input type="range" min="0" max="100" value={speed} onChange={(e) => updateSpeed(e.target.value)} />
      <p>स्थिति: सक्रिय <span className="status-dot"></span></p>
    </div>
  );
};

export default App;