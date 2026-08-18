import React, { useState, useEffect } from "react";

const Timer = ({setIsOver}) => {
  const [leftTime, setLeftTime] = useState(70);
  const [displayTime, setDisplayTime] = useState(' ');

  // Time left logic
  useEffect(() => {
    let intervalId = setInterval(() => {
      setLeftTime((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // formatted time logic
  useEffect(() => {

    if(leftTime === 0)
        setIsOver(true);
    let formattedTime = (
      `${Math.floor(leftTime / 60)
        .toString()
        .padStart(2, 0)} : ${Math.floor(leftTime % 60)
        .toString()
        .padStart(2, 0)}`
    )

    setDisplayTime(formattedTime)

  }, [leftTime]);
  return <div>🕑 Time-left: {displayTime}</div>;
};

export default Timer;
