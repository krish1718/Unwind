import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Navigate } from "react-router-dom";
import ScoreCalc from "./ScoreCalc";

const data = [
  "1. Having little interest or pleasure in doing things?",
  "2. Feeling down, depressed or hopeless?",
  "3. Trouble falling asleep, staying asleep, or sleeping too much?",
  "4. Feeling tired or having little energy?",
  "5. Feeling bad about yourself – or that you are a failure or have let yourself or your family down?",
  "6. Trouble concentrating on things, such as reading the newspaper or watching television?",
  "7. Feeling nervous, anxious or on edge?",
  "8. Not being able to stop or control worrying?",
  "9. Worrying too much about different things?",
  "10. Having trouble relaxing?",
  "11. Becoming easily annoyed or irritable? ",
  "12. Feeling afraid as if something awful might happen?",
];

const Caraousel = () => {
  const [sumDepression, setSumDepression] = useState(0);
  const [sumAnxeity, setSumAnxeity] = useState(0);
  const [quesCount, setQuesCount] = useState(1);
  const [hide, setHide] = useState(false);
  const handleClick = (e) => {
    let a = parseInt(e.target.textContent);

    quesCount >= 6
      ? setSumDepression(sumDepression + a)
      : setSumAnxeity(sumAnxeity + a);
    setQuesCount(quesCount + 1);
    if (quesCount === data.length) {
      setHide(true);
    }
  };
  return !hide ? (
    <>
    <div className="bg-purple-200"></div>
      <div className="p-5 mx-10 text-6xl text-center mb-4 font-medium font-serif text-gray-900">Answer this short Survey to help us know how you feel.</div>
      <>
        <div className=" p-4">
          <div className="h-[90vh] max-w-[900px] text-center mx-auto">
            <div className="bg-purple-300  border-2 shadow-2xl min-h-[470px] drop-shadow-lg p-5 md:p-10 rounded-xl">
              <div className="text-2xl font-serif font-medium mb-10">
                Question {quesCount}/{data.length}
              </div>
              <div className="font-serif text-gray-900 text-2xl font-medium mb-5">
                Over last 2 weeks, how often have you been bothered by...
              </div>
              <div className="font-serif text-gray-900 text-xl font-medium mb-5">{data[quesCount - 1]}</div>
              <div className="text-white font-bold">
                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-[#45bc37] hover:scale-110 transition ease-in mx-3 py-2 px-4 rounded-lg"
                >
                  1
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-[#ccde0e] hover:scale-110 transition ease-in mx-3 py-2 px-4 rounded-lg"
                >
                  2
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-[#f7dd00] hover:scale-110 transition ease-in mx-3 py-2 px-4 rounded-lg"
                >
                  3
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-[#f97402] hover:scale-110 transition ease-in mx-3 py-2 px-4 rounded-lg"
                >
                  4
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  className="bg-[#ea0b0b] hover:scale-110 transition ease-in mx-3 py-2 px-4 rounded-lg"
                >
                  5
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

    </>
  ) : (
    <>
      {/* <div className="text-5xl text-center font-serif font-bold">
        Thanks for your response
      </div>
      <div className="text-center text-xl font-semibold mb-10 mt-10">
        Your score(Depression): {sumDepression}
        <br />
        Your score(Anxeity): {sumAnxeity}
        <br />
        <ScoreCalc sum={sumDepression} />
        <br />
        <ScoreCalc sum={sumAnxeity} />
      </div> */}
      <Navigate to="/profile" replace={true} />
    </>
  );
};

export default Caraousel;
