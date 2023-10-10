import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import "./timer.css"

const CountdownTimer = ({key, duration, onComplete }) => {
    const [keyProp, setKeyProp] = useState(key);


    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };

      useEffect(() => {
        // When the key changes, update the keyProp state to trigger a reset
        setKeyProp(key);
      }, [key]);


  return (
    <div className='timer'>
    <CountdownCircleTimer
    key={keyProp}
      isPlaying
      duration={duration}
      onComplete={onComplete}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    >
      {({ remainingTime, animatedColor }) => (
        <div >
          <div className="timer-text">{formatTime(remainingTime)}</div>
          <div style={{ color: animatedColor }}>
            <svg
              className="timer-svg"
              width="60"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                r="20"
                cx="40"
                cy="40"
                fill="transparent"
                strokeWidth="10"
                stroke={animatedColor}
              />
            </svg>
          </div>
        </div>
      )}
    </CountdownCircleTimer>
    </div>
  );
};

export default CountdownTimer;
