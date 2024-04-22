import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { usernameContext } from "../../../App";
import axios from "axios";
import { AdminUsernameContext } from "../../../App";

const InitialQuestions = ({ setinitialquestions }) => {
  //user details
  const [pointer, setPointer] = useState(true);
  const data = [
    "What is your date of birth?",
    "What is your gender?",
    "Are you currently on any medication?",
    "What would you like to work one?",
  ];
  const fname = useContext(usernameContext);
  const { AdminUsername, setAdminUsername } = useContext(AdminUsernameContext);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [med, setMed] = useState("");
  const [type, setType] = useState("");
  const [clicked, setClicked] = useState(false);

  let navigate = useNavigate();
  function Redirectfn(e) {
    e.target.textContent!==""?setType(e.target.textContent):setType("none")
    setClicked(!clicked);
  }

  useEffect(() => {
    if (fname && dob && gender && med && clicked) {
      setAdminUsername(type);
      axios
        .post("http://localhost:5000/survey", {
          fname: fname,
          dob: dob,
          gender: gender,
          med: med,
          type: type,
        })
        .then((response) => {
          alert("submitted");
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/profile");
    }
  }, [clicked]);

  return (
    <div>
      {pointer ? (
        <div className="min-h-[90vh] bg-purple-50 p-10">
          <div className="font-bold text-xl text-center mb-10">
            Question Page 1 of 2
          </div>
          <div className="text-2xl mx-auto w-fit text-purple-800 my-4">
            {data[0]}
          </div>
          <div className="flex justify-center">
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border-2 w-[200px] border-black rounded-md px-3 py-2"
              placeholder="DD-MM-YYYY"
            ></input>
          </div>
          <div className="text-2xl mt-8 mx-auto w-fit text-purple-800 my-4">
            {data[1]}
          </div>
          <div className="w-fit mx-auto">
            <button
              id="1"
              //   className="mx-5 hover:bg-purple-700 transiti ease-in font-semibold bg-purple-600 text-white px-5 py-2 rounded-lg"
              className="mx-5 hover:bg-purple-700 transiti ease-in font-semibold bg-gray-400 text-white px-5 py-2 rounded-lg"
              onClick={(e) => {
                document.getElementById(`1`).style.background = "#7e22ce";
                document.getElementById(`1`).style.color = "white";
                setPointer(false);
                setGender(e.target.textContent);
              }}
            >
              Male
            </button>
            <button
              className="mx-5 hover:bg-purple-700 transiti ease-in font-semibold bg-gray-400 text-white px-5 py-2 rounded-lg"
              onClick={(e) => {
                setPointer(false);
                setGender(e.target.textContent);
              }}
            >
              Female
            </button>
            <button
              className="mx-5 hover:bg-purple-700 transiti ease-in font-semibold bg-gray-400 text-white px-5 py-2 rounded-lg"
              onClick={(e) => {
                setPointer(false);
                setGender(e.target.textContent);
              }}
            >
              Others
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[90vh] bg-purple-50 p-10">
          <div className="font-bold text-xl text-center mb-10">
            Question Page 2 of 2
          </div>
          <div className="text-2xl mx-auto w-fit text-purple-800 my-4">
            {data[2]}
          </div>
          <div className="w-fit mx-auto">
            <button
              id="yes2"
              onClick={(e) => {
                document.getElementById(`yes2`).style.background = "#7e22ce";
                document.getElementById(`no3`).style.background = "#9ca3af";
                // document.getElementById(`yes2`).style.color = "white";
                setMed(e.target.textContent);
              }}
              className="mx-5 hover:bg-purple-700 transiti ease-in font-semibold bg-gray-400 text-white px-5 py-2 rounded-lg"
            >
              Yes
            </button>
            <button
              id="no3"
              onClick={(e) => {
                document.getElementById(`no3`).style.background = "#7e22ce";
                document.getElementById(`yes2`).style.background = "#9ca3af";
                // document.getElementById(`no3`).style.color = "white";
                setMed(e.target.textContent);
              }}
              className="mx-5 hover:bg-purple-700 transiti ease-in font-semibold bg-gray-400 text-white px-5 py-2 rounded-lg"
            >
              No
            </button>
          </div>
          <div className="text-2xl mx-auto w-fit mt-10 text-purple-800 my-4">
            {data[3]}
          </div>
          <div className="w-[800px] mx-auto">
            <button
              onClick={(e) => Redirectfn(e)}
              className="m-5 mb-0 hover:bg-purple-700 transiti ease-in font-semibold bg-purple-600 text-white px-5 py-2 rounded-lg"
            >
              Anxiety
            </button>
            <button
              onClick={(e) => Redirectfn(e)}
              className="m-5 mb-0 hover:bg-purple-700 transiti ease-in font-semibold bg-purple-600 text-white px-5 py-2 rounded-lg"
            >
              Lifestyle
            </button>
            <button
              onClick={(e) => Redirectfn(e)}
              className="m-5 mb-0 hover:bg-purple-700 transiti ease-in font-semibold bg-purple-600 text-white px-5 py-2 rounded-lg"
            >
              Trauma
            </button>
            <button
              onClick={(e) => Redirectfn(e)}
              className="m-5 mb-0 hover:bg-purple-700 transiti ease-in font-semibold bg-purple-600 text-white px-5 py-2 rounded-lg"
            >
              Relationships
            </button>
            <button
              onClick={(e) => Redirectfn(e)}
              className="m-5 mb-0 hover:bg-purple-700 transiti ease-in font-semibold bg-purple-600 text-white px-5 py-2 rounded-lg"
            >
              Identity
            </button>
            <button
              onClick={(e) => Redirectfn(e)}
              className="m-5 mb-0 hover:bg-purple-700 transiti ease-in font-semibold bg-purple-600 text-white px-5 py-2 rounded-lg"
            >
              Development Concerns
            </button>
            <button
              onClick={(e) => Redirectfn(e)}
              className="m-5 mb-0 hover:bg-purple-700 transiti ease-in font-semibold bg-purple-600 text-white px-5 py-2 rounded-lg"
            >
              Overall Wellbeing
            </button>
            <button
              onClick={(e) => Redirectfn(e)}
              className="m-5 mb-0 hover:bg-purple-700 transiti ease-in font-semibold bg-purple-600 text-white px-5 py-2 rounded-lg"
            >
              Professional Concerns
            </button>
            <button
              onClick={() => {
                setinitialquestions(false)
                }}
              className="m-5 hover:bg-purple-700 transiti ease-in font-semibold bg-purple-600 text-white px-5 py-2 rounded-lg"
            >
              Not Sure
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InitialQuestions;