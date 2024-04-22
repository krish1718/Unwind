import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DailySurvey = ({ sum, setSum }) => {
  const data = [
    "Did you have an positive attitude today?",
    "Were you able to concentrate on work today?",
    "Were you able to express your feelings with others?",
    "Did you get good sleep?",
    "Did you often feel distracted during the day?",
    // "Did you often overthink about some things during the day?",
    // "Did you actively take part in discussions?",
    // "Were you worried about the future or past too much?",
    // "Did you feel a bit too stressed?",
    // "Did you feel like being alone, rather than socializing?",
  ];

  const [dailySum, setDailySum] = useState(0);

  return (
    <div>
      {/* // Survey Page  */}
      <div>
        <div className="bg-purple-400 p-4 min-h-[90vh]">
          <div className="bg-white p-4 rounded-2xl border drop-shadow-xl">
            <div className="text-4xl mt-5 font-bold text-center">
              How do you feel today?
            </div>
            {data.map((item, i) => {
              return (
                <div className="mt-10 mb-5">
                  <div className="text-purple-700 font-semibold text-center mb-2 text-xl">
                    {item}
                  </div>
                  <div className="flex justify-evenly flex-row w-[450px] mx-auto">
                    <button
                      id={`1${item}`}
                      onClick={(e) => {
                        {
                          document.getElementById(`1${item}`).style.background =
                            "#7e22ce";
                          document.getElementById(`1${item}`).style.color =
                            "white";
                        }
                        setDailySum(dailySum + 1);
                      }}
                      className="mx-3 drop-shadow-md border hover:bg-purple-600 hover:text-white font-semibold bg-gray-200 px-5 py-2 transition ease-in hover:scale-110 rounded-lg"
                    >
                      1
                    </button>
                    <button
                      id={`2${item}`}
                      onClick={() => {
                        {
                          document.getElementById(`2${item}`).style.background =
                            "#7e22ce";
                          document.getElementById(`2${item}`).style.color =
                            "white";
                        }
                        setDailySum(dailySum + 2);
                      }}
                      className="mx-3 drop-shadow-md border hover:bg-purple-600 hover:text-white font-semibold bg-gray-200 px-5 py-2 transition ease-in hover:scale-110 rounded-lg"
                    >
                      2
                    </button>
                    <button
                      id={`3${item}`}
                      onClick={() => {
                        {
                          document.getElementById(`3${item}`).style.background =
                            "#7e22ce";
                          document.getElementById(`3${item}`).style.color =
                            "white";
                        }
                        setDailySum(dailySum + 3);
                      }}
                      className="mx-3 drop-shadow-md border hover:bg-purple-600 hover:text-white font-semibold bg-gray-200 px-5 py-2 transition ease-in hover:scale-110 rounded-lg"
                    >
                      3
                    </button>
                    <button
                      id={`4${item}`}
                      onClick={() => {
                        {
                          document.getElementById(`4${item}`).style.background =
                            "#7e22ce";
                          document.getElementById(`4${item}`).style.color =
                            "white";
                        }
                        setDailySum(dailySum + 4);
                      }}
                      className="mx-3 drop-shadow-md border hover:bg-purple-600 hover:text-white font-semibold bg-gray-200 px-5 py-2 transition ease-in hover:scale-110 rounded-lg"
                    >
                      4
                    </button>
                    <button
                      id={`5${item}`}
                      onClick={() => {
                        {
                          document.getElementById(`5${item}`).style.background =
                            "#7e22ce";
                          document.getElementById(`5${item}`).style.color =
                            "white";
                        }
                        setSum((prev)=>{return[...prev,dailySum+5]})
                        // setDailySum(0)
                      }}
                      className="mx-3 drop-shadow-md border hover:bg-purple-600 hover:text-white font-semibold bg-gray-200 px-5 py-2 transition ease-in hover:scale-110 rounded-lg"
                    >
                      5
                    </button>
                  </div>
                  <div className="flex flex-row w-[450px] pr-10 pl-10 justify-between pt-1 mx-auto">
                    <div>No</div>
                    <div>Yes</div>
                  </div>
                </div>
              );
            })}
            <NavLink to="/profile">
              <div
                className="mx-auto w-fit bg-purple-600 hover:bg-purple-700 text-white py-3 px-5 rounded-xl font-semibold transition ease-in cursor-pointer my-10"
              >
                Submit
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySurvey;
