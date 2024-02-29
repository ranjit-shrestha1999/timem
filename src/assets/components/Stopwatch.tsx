import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [alarmTime, setAlarmTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (time === alarmTime && isAlarmSet) {
      alert("Alarm!");
      setIsAlarmSet(false);
    }
  }, [time, alarmTime, isAlarmSet]);

  const handleStartStop = () => {
    setIsActive((prev) => !prev);
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
    setIsAlarmSet(false);
  };

  const handleSetAlarm = () => {
    const alarmValue = parseInt(prompt("Set alarm at (in seconds):"), 10);
    if (!isNaN(alarmValue)) {
      setAlarmTime(alarmValue);
      setIsAlarmSet(true);
    } else {
      alert("Invalid input! Please enter a number.");
    }
  };

  return (
    <div>
      <h1>Stopwatch: {time}s</h1>
      <button onClick={handleStartStop}>{isActive ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSetAlarm}>Set Alarm</button>
      {isAlarmSet && <p>Alarm set at {alarmTime}s</p>}
    </div>
  );
}

export default Stopwatch;
