import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  const today = new Date();
  const dateString = today.toDateString();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridem = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    return `${dateString} ${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default Clock;
