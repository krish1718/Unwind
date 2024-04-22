import React, { useState, useEffect } from "react";

const ScoreCalc = ({ sumD,sumA }) => {
  const [check, setCheck] = useState("");
  sumD = Math.round(sumD / 6);
  useEffect(() => {
    // if (sum <= 2) setCheck("You are fine");
    // else if (sum <= 4) setCheck("You are half mental half normal");
    // else setCheck("You are mental");
  }, []);
  return (
    <div>
      <div>{check}</div>;
      <div className="p-10">
        <div className="flex flex-row">
          <div>My Mood</div>
          <div>Thu, 19 Jan</div>
        </div>
        <div className="flex flex-row text-white bg-yellow-500 w-fit py-2 px-8 my-4 rounded-full">
          <div>Emotional Burnout</div>
          <div className="ml-4">70%</div>
        </div>
        <div className="flex flex-row text-white bg-purple-500 w-fit py-2 px-8 my-4 rounded-full">
          <div>Anxiety</div>
          <div className="ml-4">70%</div>
        </div>
        <div className="flex flex-row text-white bg-pink-500 w-fit py-2 px-8 my-4 rounded-full">
          <div>Irritation</div>
          <div className="ml-4">70%</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCalc;
