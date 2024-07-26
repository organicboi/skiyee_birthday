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
    <div className=" qualitesConatiner smileConatiner">
      <img
        style={{ borderRadius: "30px" }}
        width={350}
        src="./mikuSmile.jpg"
        alt=""
      />
      <h1> Smile </h1>
      <div className="paragraph">
        Im not gonna lie the most favourite feature of yours is your smile and
        it just gives a smile in/to my heart, like i can prove it scientifically
        if need, tbh like i feel happy from my heart <br />
        <br />
        All that i want is to see you happy and smiling always
        <br />
        <br />
        So im going on a mission to keep you happy and provide you that happines
        and joy you always deserved in your life
        <br />
        <br />
        Babe i swear one day i'll make you jump in joy and that day i'll find
        myself succesfull in making you happy, i just wanna see that happnies on
        your face i carve for !
        <br />
        <br />
        Man o' Man your smile just heals !
      </div>
      <button className="qualitiesGoBackBtn" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
}

export default Love;
