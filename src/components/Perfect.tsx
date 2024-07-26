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
    <div className=" qualitesConatiner perfectContainer">
      <img
        style={{ borderRadius: "30px" }}
        width={250}
        src="./mikuPerfect.jpg"
        alt=""
      />
      <h1> Perfect </h1>
      <div className="paragraph">
        Okay this is very serious topic
        <br />
        <br />
        From inner to outer you are just built perfect Babe
        <br />
        <br />
        You are just so mesmerizingly beautiful from inside, you are such an
        amzing soul, like you help so many people daily you give them new life
        to live
        <br />
        <br />
        You are just and inspiration for me and 100 others and ik you will be
        the best doctor one day the one you dreamt to be
        <br />
        <br />
        Talking about outer beauty...ufff... only i can conform this on this
        planet how perfect you are, like masha-allah subh-lallah you are just an
        work of art, khuda ne tumhe fursat se banaya hai bass mere liye, one
        last line..... <br /> 'your are jsut sizzling hott'
        <br />
        <br />
        You just a perfect marriage material, i really am lucky to have you as
        my future wife becuase im living the every boy's dream, hehe
        <br />
        <br />
        You are just gonna be a perfect "Bhau" and trust me i'll keep you like a
        queen in my house muaaah
      </div>
      <button className="qualitiesGoBackBtn" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
}

export default Love;
