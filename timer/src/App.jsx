// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Timer } from './components/Timer';

function App() {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(5);
  const [startTimer, setStartTimer] = useState(false);
  return (
    <div className="App">
      <input type="number" onChange={(e) => setStartTime(e.target.value)} placeholder='StartTime' value={startTime} />
      <input type="number" onChange={(e) => setEndTime(e.target.value)} placeholder='EndTime' value={endTime}/>
      <br />
      
        {startTimer ? <Timer initialTime={startTime} endTime={endTime} /> : <h2>Timer Stopped!</h2> }
      <button onClick={() => setStartTimer(!startTimer)}>{startTimer ? "Stop" : "Start"}</button>

      

    </div>
  );
}

export default App;
