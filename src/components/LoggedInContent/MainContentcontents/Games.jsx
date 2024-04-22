import React from "react";
import { NavLink } from "react-router-dom";

const Games = () => {
  return (
    <div>
      <div>
        <div>
          <div className="min-h-screen p-4">
            <div className="text-3xl text-center font-semibold my-5 text-purple-600">
              Select Categories
            </div>
            <div className="flex flex-wrap">
              <NavLink
                // to="/breathe"
                className="border-4 w-[44vw] hover:bg-purple-100 border-purple-600 text-purple-600 drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-xl font-semibold">
                  Word Finder
                </div>
                <iframe
                  className="rounded-xl"
                  title="woed-finder"
                  seamless="seamless"
                  allowtransparency="true"
                  allowfullscreen="true"
                  style={{ width: "100%", height: "550px", border: "Opx" }}
                  frameborder="0"
                  src="https://zv1y2i8p.play.gamezop.com/g/r1K-J3TQ5Ar"
                ></iframe>
              </NavLink>
              <NavLink
                // to="/yoga"
                className="border-4 w-[44vw] hover:bg-purple-100 border-purple-600 text-purple-600 drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-xl font-semibold">
                  Candy Fiesta
                </div>
                <iframe
                  className="rounded-xl"
                  title="candy"
                  seamless="seamless"
                  allowtransparency="true"
                  allowfullscreen="true"
                  frameborder="0"
                  style={{ width: "100%", height: "550px", border: "Opx" }}
                  src="https://zv1y2i8p.play.gamezop.com/g/r1zG1h6m90H"
                ></iframe>
              </NavLink>
              <NavLink
                // to="/morningexercises"
                className="border-4 w-[44vw] hover:bg-purple-100 border-purple-600 text-purple-600 drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-xl font-semibold">
                  Fruit Chop
                </div>
                <iframe
                  className="rounded-xl"
                  title="fruit-ninja"
                  seamless="seamless"
                  allowtransparency="true"
                  allowfullscreen="true"
                  frameborder="0"
                  style={{ width: "100%", height: "550px", border: "Opx", background: "#FFFFFF" }}
                  src="https://zv1y2i8p.play.gamezop.com/g/rkWfy2pXq0r"
                ></iframe>
              </NavLink>
              <NavLink
                // to="/games"
                className="border-4 w-[44vw] hover:bg-purple-100 border-purple-600 text-purple-600 drop-shadow-xl p-3 rounded-xl m-5 font-semibold"
              >
                <div className="text-center p-3 text-xl font-semibold">
                  Tower Twist
                </div>
                <iframe
                  className="rounded-xl"
                  title="tower-twist"
                  seamless="seamless"
                  allowtransparency="true"
                  allowfullscreen="true"
                  frameborder="0"
                  style={{ width: "100%", height: "550px", border: "Opx" }}
                  src="https://zv1y2i8p.play.gamezop.com/g/HJT46GkPcy7"
                ></iframe>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
