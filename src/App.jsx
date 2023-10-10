import React, { useEffect, useState } from 'react';
import CountdownTimer from './Components/CountdownTimer';
import "./App.css"

const App = () => {
  const [duration, setDuration] = useState(10); // Initial duration is 60 seconds
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  

  const handleTimerComplete = () => {
    setDuration(10)
    setTimerKey((prevKey) => prevKey + 1);
  };

  const addTime = () => {
    setDuration((prevDuration) => prevDuration + 10);
    setTimerKey((prevKey) => prevKey + 1);
  };

  const resetTimer = () => {
    setDuration(10);
    setTimerKey((prevKey) => prevKey + 1);
   
  };

  useEffect(()=>{
    setIsTimerActive(true)
  },[])



  return (
    <div className="App">
      <h2>7 dots smart solutions asignment</h2>
      <h3>Routine Starting in.....</h3>
      <p>subheading here</p>
      
        <CountdownTimer  key={timerKey} duration={duration} onComplete={handleTimerComplete} />

        <div className='container'>
          <button className='plus' onClick={addTime}> + 10 Seconds</button>
          <button className='skip' onClick={resetTimer}> Skip</button>
        </div>
      
    </div>
  );
};

export default App;
