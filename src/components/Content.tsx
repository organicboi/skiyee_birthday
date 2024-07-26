import React, { useState, useEffect } from "react";
import "../style/Timer.css";

function Content() {
  const [question, setQuestion] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [buttonsSwapped, setButtonsSwapped] = useState(false);

  const handleYesClick = () => {
    setButtonsSwapped(!buttonsSwapped);
  };

  const handleNoClick = () => {
    setQuestion(false);
    setShowAnswer(true);
  };

  // x answer logic
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setIsWrong(false); // Reset the wrong answer message when input changes
  };

  const handleSubmit = () => {
    if (answer.toLowerCase() === "x") {
      setIsCorrect(true);
    } else {
      setIsWrong(true);
      setTimeout(() => {
        setIsWrong(false);
      }, 3000); // Show wrong answer message for 3 seconds
    }
  };

  // Stone-Paper-Scissors logic
  const [gameState, setGameState] = useState("idle"); // idle, showingWords, showingResult
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [buttonText, setButtonText] = useState("Play Game ! ");

  const images = [
    { src: "./fist.png", alt: "fist", word: "stone" },
    { src: "./paper.png", alt: "paper", word: "paper" },
    {
      src: "./scissors.png",
      alt: "scissors",
      word: "scissors",
    },
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const handleGameSubmit = () => {
    if (gameState === "idle") {
      setGameState("showingWords");
      setCurrentImageIndex(0);
    } else {
      setGameState("idle");
      setSelectedImage(null);
      setButtonText("Submit");
    }
  };

  useEffect(() => {
    if (gameState === "showingWords") {
      const intervalId = setInterval(() => {
        if (currentImageIndex < images.length) {
          setSelectedImage(images[currentImageIndex]);
          setCurrentImageIndex(currentImageIndex + 1);
        } else {
          clearInterval(intervalId);
          const randomImage = getRandomImage();
          setSelectedImage(randomImage);
          setGameState("showingResult");
          setButtonText("Play Again");
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [gameState, currentImageIndex]);

  return (
    <div className="contentContainer">
      <div className="riddle_1_div">
        {question && !showAnswer ? (
          <div className="riddle_1_question">
            Do you know ?<br />
            Love is a 5 letter word?
          </div>
        ) : (
          <div className="riddle_1_question">
            That's because love is <br /> incomplete without "u"
            <br />
            <br /> Words can't express how much I love you, but trust me I'll
            love you to the end of this world, <br /> <br />
            I'll love you "jab tak hai jaan"
            <br /> All I want in return is your trust and belief in me <br />
            I'll always make sure you are happy and I'll do anything to bring
            joy to your face.
            <br />
            <br />
            muaaaaahhh
          </div>
        )}
        {!showAnswer && (
          <div className="riddle_1_option">
            {buttonsSwapped ? (
              <>
                <button className="riddle_option_btn" onClick={handleNoClick}>
                  No
                </button>
                <button className="riddle_option_btn" onClick={handleYesClick}>
                  Yes
                </button>
              </>
            ) : (
              <>
                <button className="riddle_option_btn" onClick={handleYesClick}>
                  Yes
                </button>
                <button className="riddle_option_btn" onClick={handleNoClick}>
                  No
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <br />
      {/* question two 2 */}
      <div className="riddle_1_div ">
        {isCorrect ? (
          <div className="riddle_1_question naughtyDivCss">
            <img
              className="mikuImages"
              src="./miku_naughty.png"
              alt="Congratulations"
            />
            <br />

            <span> Thats Naughty beech !</span>
          </div>
        ) : (
          <>
            <div className="riddle_1_question">
              {isWrong
                ? "Wrong answer. Try again."
                : "When there's one of me, you're wrong, when there's two of me, there's twenty, when there's three of me? It's dirty. What am I?"}
            </div>
            <div className="riddle_1_option">
              <input
                type="text"
                placeholder="Enter Your Answer Here"
                value={answer}
                onChange={handleInputChange}
              />
              <button className="riddle_option_btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </>
        )}
      </div>

      <br />
      {/* question three 3 */}
      <div className="riddle_1_div">
        <div className="riddle_3_upper_div ">
          {gameState === "showingResult" ? (
            <div className="riddle_1_question gameResultContainer">
              <img
                className="gameResultCss"
                src={selectedImage.src}
                alt={selectedImage.alt}
              />
              <br />
              <div>Miku Says her guess is {selectedImage.word}</div>
            </div>
          ) : (
            images.map((img, index) => (
              <div key={index} className="riddle_1_question">
                <img className={img.alt} src={img.src} alt={img.alt} />
                {gameState === "showingWords" && currentImageIndex > index && (
                  <div>{img.word}</div>
                )}
              </div>
            ))
          )}
        </div>
        <button className="stonePaperPlayBtn" onClick={handleGameSubmit}>
          {buttonText}
        </button>
        <div className="waitText">
          Wait to until the timer ends to celebrate !
        </div>
      </div>
    </div>
  );
}

export default Content;
