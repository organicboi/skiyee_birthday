import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import Sparkle from "react-sparkle";
import "../style/Celebration.css";

function Celebration() {
  const navigate = useNavigate();
  //   const handleNavigation = (path) => {
  //     navigate(path);
  //   };
  const [celebrating, setCelebrating] = useState(true);
  const [flashing, setFlashing] = useState(true);
  const audioRef = useRef(null);
  const [isAudioReady, setIsAudioReady] = useState(false);

  useEffect(() => {
    let flashingInterval;
    if (celebrating) {
      setFlashing(true);
      flashingInterval = setInterval(() => {
        setFlashing((prev) => !prev); // Toggle flashing
      }, 500); // Flash every 500ms

      if (isAudioReady) {
        audioRef.current
          .play()
          .catch((e) => console.log("Audio play failed:", e));
      }
    } else {
      setFlashing(false);
      clearInterval(flashingInterval);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }

    return () => {
      clearInterval(flashingInterval);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [celebrating, isAudioReady]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("canplaythrough", () => setIsAudioReady(true));
    return () => {
      audio.removeEventListener("canplaythrough", () => setIsAudioReady(true));
    };
  }, []);

  const handleCelebrate = () => {
    setCelebrating((prev) => !prev);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className={`celebrationContainer ${flashing ? "disco" : ""}`}>
      {celebrating && <Confetti />}
      {celebrating && <Sparkle color="gold" count={500} />}
      <h1>Celebration Page</h1>
      <button className="celebrateBtn" onClick={handleCelebrate}>
        {celebrating ? "Stop Celebrating" : "Celebrate"}
      </button>
      <div className="optionsContainer ">
        <button
          className="optionBtn spDiv1"
          onClick={() => handleNavigation("/love")}
        >
          Love
        </button>
        <button
          className="optionBtn spDiv4"
          onClick={() => handleNavigation("/adorable")}
        >
          Adorable
        </button>
        <button
          className="optionBtn spDiv2"
          onClick={() => handleNavigation("/smile")}
        >
          Smile
        </button>
        <button
          className="optionBtn spDiv3"
          onClick={() => handleNavigation("/perfect")}
        >
          Perfect
        </button>
      </div>
      <button className="backBtn" onClick={handleGoBack}>
        Go Back
      </button>
      <audio ref={audioRef} loop>
        <source src="./celebration_song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Celebration;
