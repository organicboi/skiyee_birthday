import React from "react";
import Timer from "./Timer";
import Content from "./Content";
import "../style/Home.css";

function Home() {
  const myBirthday = "2024-12-25";
  return (
    <div className="container">
      <div className="timerSection">
        <Timer birthdayDate={myBirthday} />
      </div>
      <div className="contentSection">
        <Content />
      </div>
    </div>
  );
}

export default Home;
