import React from "react";
import "../style/qualities.css";
import { useNavigate } from "react-router-dom";

function Love() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleGoBack = () => {
    navigate("/celebrate");
  };
  return (
    <div className=" qualitesConatiner loveConatiner">
      <img className="mikuImages" src="./mikuLove1.jpg" alt="" />
      <h1> Love </h1>
      <div className="paragraph">
        My love for you is just so immense that just words arent enough to
        describe it. <br />
        <br />
        i really hope one day I"ll be there and prove it with my actions. <br />
        <br />
        Your are just so fucking precious to me babe, i really wanna be with you
        for my entire life and ill always be with you and support you in your
        hard times and enjoy with you in your good times.
        <br />
        <br />I wanna be a man who you can count on, <br /> i know im not there
        yet but i'll be there one day, then i can proudly say that im your
        boyfriend and you can count on me with your life and i'll never let my
        baby down.
        <br />
        <br />
        Yea i do tust you that you can be MoM of my childerns and i just know
        babe you are just gonna be the best mom on this planet, i can just trust
        you with anything in my life
      </div>
      <button className="qualitiesGoBackBtn" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
}

export default Love;
