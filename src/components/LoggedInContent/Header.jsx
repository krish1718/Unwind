import React, { useContext } from "react";
import { usernameContext, passwordContext } from "../../App";
import { NavLink } from "react-router-dom";
import logoimage from "../../assets/unwind-logo.png";

const Header = ({ setLoginView }) => {
  const { username, setUsername } = useContext(usernameContext);
  return (
    <div className="z-20 sticky top-0 bg-[#fff4e1]">
      <div className="flex justify-between px-4 py-6">
        <NavLink className="font-bold font-serif" to="/">
          <img
            src={logoimage}
            className="h-[25px] my-auto transition ease-in hover:scale-110"
            alt=""
          />
        </NavLink>
        <div>
          {/* <NavLink to="/" className="mx-2 hover:text-purple-500">
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
            
          </NavLink> */}
          <NavLink
            to="/profile"
            className="mx-4 hover:scale-110 transition ease-in hover:text-purple-500"
          >
            Profile
            {/* Hello, <a className="font-semibold">{username ? username : "User"}</a> */}
          </NavLink>
          <NavLink
            to="/community"
            className="mx-4 hover:scale-110 transition ease-in hover:text-purple-500"
          >
            Community
          </NavLink>
          <NavLink
            to="/therapist"
            className="mx-4 hover:scale-110 transition ease-in hover:text-purple-500"
          >
            Get Help
          </NavLink>
          <NavLink
            to="/activities"
            className="mx-4 hover:scale-110 transition ease-in hover:text-purple-500"
          >
            Activities
          </NavLink>
          <NavLink
            to="/about"
            className="mx-4 hover:scale-110 transition ease-in hover:text-purple-500"
          >
            About Us
          </NavLink>
        </div>
        <div>
          <NavLink to="/contact" className="mx-2 hover:text-purple-500">
            Contact Us
          </NavLink>
          <NavLink
            onClick={() => {
              window.location.reload();
            }}
            className="mx-2 text-white font-semibold py-1 px-3 rounded-md bg-purple-700"
          >
            Logout
          </NavLink>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
