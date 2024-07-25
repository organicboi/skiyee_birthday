import React, { useEffect, useState } from "react";

function Timer() {
  const birthdayDate = new Date("2024-07-26T00:00:00");

  const calculateTimeLeft = () => {
    const difference = +birthdayDate - +new Date();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isBirthday: true, // Add a flag to indicate it's the birthday
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      isBirthday: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds, isBirthday } = timeLeft;

  return (
    <div className="headingContainer">
      <h1>
        {isBirthday ? (
          <div id="timer">
            <span>Happy Birthday Skiyee!</span>
          </div>
        ) : (
          <div id="timer">
            {/* <span>{days} days </span> */}
            <span>{hours} hours </span>
            <span>{minutes} minutes </span>
            <span>{seconds} seconds </span>
          </div>
        )}
      </h1>
      <div className="celebrateDiv">
        <img
          className="mikuImages"
          src="src\assets\images\miku_celebrate.png"
          alt=""
        />
        <button className="celebrateBtn">Celebrate</button>
      </div>
    </div>
  );
}

export default Timer;
