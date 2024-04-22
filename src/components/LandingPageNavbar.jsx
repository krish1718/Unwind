import React, { useContext } from "react";
import { usernameContext, passwordContext } from "../App";
import logoimage from "../assets/unwind-logo.png";

const LandingPageNavbar = ({ setLandingpagevisibility }) => {
  const { username, setUsername } = useContext(usernameContext);
  return (
    <>
      <div className="z-20 sticky top-0 bg-[#fff4e1]">
        <div className="flex justify-between p-4 items-center">
          <img
            src={logoimage}
            className="h-[25px] my-auto transition ease-in hover:scale-110"
            alt=""
          />
          <div className="flex flex-row">
            {/* <div to="/" className="mx-2 hover:text-purple-500">
            <div className="inline-block peer flex-row">
              Hello, {username ? username : "User"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 inline-block ml-2 border rounded-full border-purple-500 my-auto peer-hover:border-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            
            <div className="hidden text-black z-30 text-left absolute rounded-md peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
              <div className="p-4">
                <hr />
                <div className="font-semibold text-sm my-2">Your Lists</div>
                <div
                  onClick={() => setLoginView(true)}
                  className="text-xs cursor-pointer hover:underline hover:text-purple-500"
                >
                  Logout
                </div>
              </div>
            </div>
            
          </div> */}
            <div
              onClick={() => setLandingpagevisibility(false)}
              className="cursor-pointer w-fit inline-block mx-4 transition ease-in hover:scale-110 hover:text-purple-500"
            >
              Get Help
            </div>
            <div
              onClick={() => setLandingpagevisibility(false)}
              className="cursor-pointer w-fit inline-block mx-4 transition ease-in hover:scale-110 hover:text-purple-500"
            >
              Community
            </div>
            <div
              to="/"
              className="cursor-pointer w-fit inline-block mx-4 transition ease-in hover:scale-110 hover:text-purple-500"
            >
              About Us
            </div>
            <div
              onClick={() => setLandingpagevisibility(false)}
              className="cursor-pointer w-fit inline-block mx-4 transition ease-in hover:scale-110 hover:text-purple-500"
            >
              Contact Us
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div
              onClick={() => setLandingpagevisibility(false)}
              className="mx-2 cursor-pointer hover:bg-purple-700 transition ease-in h-fit text-white font-semibold py-1 px-3 rounded-md bg-purple-600"
            >
              Login
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default LandingPageNavbar;
