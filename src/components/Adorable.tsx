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
    <div className="qualitesConatiner adorableConatiner">
      <img
        src="./mikuAdorable.jpg"
        style={{ borderRadius: "30px" }}
        width={200}
        alt=""
      />
      <h1> Adorable </h1>
      <div className="paragraph">
        Well tbh you are the most adorable girl i have seen in my life <br />
        <br />
        Every thing you do - i love it, the goofyness which you carry is what
        always makes me think this even more (adorable) <br />
        <br />
        Any action you do i find it adorable, call me weird idc but you are
        fucking adorable asf honey like uffffff
        <br />
        <br />
        idk if i can ever be able to explain this feeling but deep inside i feel
        only one thing when i see you is that how lucky ass i was to get such an
        adorable girl in my life
        <br />
        <br />
        Bass ek cheej khaunga, <br /> "Dil Garden Garden ho jata hai"
      </div>
      <button className="qualitiesGoBackBtn" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
}

export default Love;
