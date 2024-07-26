import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import Content from "./Content";
import "../style/Home.css";
import "../style/Timer.css";
import "../style/Content.css";
import Confetti from "react-confetti";
import Sparkle from "react-sparkle";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const birthdayDate = new Date("2024-07-26T00:00:00");
  const [buttonPressed, setButtonPressed] = useState(true);
  const handleCelebrate = () => {
    navigate("/celebrate");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };
  const calculateTimeLeft = () => {
    const difference = +birthdayDate - +new Date();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isBirthday: true,
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
  const [celebrating, setCelebrating] = useState(false);
  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    let flashingInterval;
    if (celebrating) {
      setFlashing(true);
      flashingInterval = setInterval(() => {
        setFlashing((prev) => !prev); // Toggle flashing
      }, 500); // Flash every 500ms
    } else {
      setFlashing(false);
      clearInterval(flashingInterval);
    }

    return () => clearInterval(flashingInterval);
  }, [celebrating]);

  // const handleCelebrate = () => {
  //   setCelebrating((prev) => !prev);
  //   setButtonPressed(false); // Toggle celebrating state
  // };

  const { hours, minutes, seconds, isBirthday } = timeLeft;
  return (
    <div>
      <div className={`headingContainer ${flashing ? "disco" : ""}`}>
        {celebrating && <Confetti />}
        {celebrating && <Sparkle color="gold" count={500} />}
        <h1>
          {isBirthday ? (
            <div id="timer">
              <span>Happy Birthday Skiyee!</span>
            </div>
          ) : (
            <div className="timerDiv" id="timer">
              {/* <span>{days} days </span> */}
              <span>{hours} hours </span>
              <span>{minutes} minutes </span>
              <span>{seconds} seconds </span>
            </div>
          )}
        </h1>
        <div className="celebrateDiv">
          <img className="mikuImages" src=".\miku_celebrate.png" alt="" />
          <button className="celebrateBtn" onClick={handleCelebrate}>
            {celebrating ? "Stop Celebrating" : "Celebrate"}
          </button>
        </div>
      </div>
      {buttonPressed ? (
        <Content />
      ) : (
        <>
          <div className="spConatiner">
            <button
              className="spDiv1 spDiv"
              onClick={() => handleNavigation("/love")}
            >
              Love
            </button>
            <button
              className="spDiv2 spDiv"
              onClick={() => handleNavigation("/perfect")}
            >
              Perfect
            </button>
            <button
              className="spDiv3 spDiv"
              onClick={() => handleNavigation("/smile")}
            >
              Smile
            </button>
            <button
              className="spDiv4 spDiv"
              onClick={() => handleNavigation("/adorable")}
            >
              Adorable
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
