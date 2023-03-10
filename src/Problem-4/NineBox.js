import React, { useState, useEffect } from "react";
import "./style.css";

function NineBox() {
  const [boxes, setBoxes] = useState([]);
  const [hitBox, setHitBox] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameRunning, setIsGameRunning] = useState(true);

  useEffect(() => {
    // Create 9 boxes
    const boxesArray = [];
    for (let i = 0; i < 9; i++) {
      boxesArray.push({ id: i, hit: false });
    }
    setBoxes(boxesArray);
  }, []);

  useEffect(() => {
    // Randomly select one box to be the HIT box
    const randomHitBox = Math.floor(Math.random() * 9);
    setHitBox(randomHitBox);

    // Display the HIT box for 1 second
    const timer = setTimeout(() => {
      setHitBox(null);
    }, 1000);

    // Clean up the timer when the HIT box changes or the game ends
    return () => clearTimeout(timer);
  }, [score, timeLeft]);

  const handleBoxClick = (id) => {
    if (id === hitBox && isGameRunning) {
      setScore(score + 5);
    } else if (isGameRunning) {
      setScore(score - 2.5);
    }
  };

  useEffect(() => {
    // Count down the time for 1 minute
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      // Clean up the timer when the game ends
      return () => clearTimeout(timer);
    } else {
      setIsGameRunning(false);
    }
  }, [timeLeft]);

  return (
    <div className="hit-game">
      <div className="big-box">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`small-box ${box.hit ? "hit" : ""}`}
            onClick={() => handleBoxClick(box.id)}
          >
            {hitBox === box.id && <div className="hit-text">HIT</div>}
          </div>
        ))}
      </div>
      <div className="score">Score: {score}</div>
      <div className="time-left">Time left: {timeLeft} seconds</div>
    </div>
  );
}

export default NineBox;
