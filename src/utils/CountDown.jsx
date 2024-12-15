import React, { useState, useEffect } from 'react';

const CountdownTimer = ({timeLeft,setTimeLeft}) => {
 

  useEffect(() => {
    // Set interval to decrease the time by 1 second every 1000ms
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer); // Stop the timer when it reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <>
    
      <div
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: timeLeft === 0 ? 'red' : 'black',
        }}
      >
        {formatTime(timeLeft)}
      </div>
     
    </>
  );
};

export default CountdownTimer;
