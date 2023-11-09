import React from "react";
import "./ScoreView.css";

const ScoreView = ({ handleResetClick, score }) => {
  return (
    <div>
      <p style={{color:'red'}}>You scored {score} out of 5</p>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default ScoreView;
