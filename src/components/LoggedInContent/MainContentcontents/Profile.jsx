import React, { useContext, useState,useMemo } from "react";
import { NavLink } from "react-router-dom";
import { usernameContext, passwordContext } from "../../../App";
import days10 from "../../../assets/days10.jpg";
import days25 from "../../../assets/days25.jpg";
import days50 from "../../../assets/days50.jpg";
import days100 from "../../../assets/days100.jpg";
import year1 from "../../../assets/year1.jpg";
import Task from "./Task";
import MyChart from "./MyChart";

const Profile = ({ sum, setSum, currentCoins, setCurrentCoins }) => {
  const { username, setUsername } = useContext(usernameContext);
  //   const [currentCoins, setCurrentCoins] = useState(10000);

  return (
    <div>
      <div className="font-quicksand flex min-h-screen bg-gray-200">
        <div className="w-1/4 pl-3">
          <div className="bg-white my-3 py-1 px-3 pl-3 rounded-xl min-h-[83vh]">
            <div className="text-center font-quicksand font-semibold text-xl -ml-1 mb-1">
              Profile page
            </div>
            <img
              className="mx-auto w-[170px] h-[170px] rounded-xl my-4"
              src="https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"
              alt=""
            />
            <div className="text-center font-quicksand font-semibold text-xl">
              {username}
            </div>
            <hr />
            <div>
              <div className="font-semibold font-quicksand mt-7">
                Badges Earned
              </div>
              <div className="flex my-2 justify-evenly">
                <img className="w-[65px] rounded-lg" src={days10} alt="" />
                <img className="w-[65px] rounded-lg" src={days25} alt="" />
                <img className="w-[65px] rounded-lg" src={days50} alt="" />
                <img className="w-[65px] rounded-lg" src={days100} alt="" />
                <img className="w-[65px] rounded-lg" src={year1} alt="" />
              </div>
            </div>
            <div>
              <div className="font-semibold font-quicksand mx-auto w-fit my-7 flex">
                Your ZenCoins:
                <div className="flex ml-3">
                  {currentCoins}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 fill-yellow-400 stroke-yellow-700 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center">
                <NavLink
                  to="/activities"
                  className="bg-yellow-400 hover:bg-yellow-500 font-quicksand transition ease-in rounded-xl font-semibold py-3 px-6"
                >
                  Earn more ZenCoins
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 p-3">
          <div className="bg-white min-h-[187px] p-3 rounded-xl">
            <div className="font-semibold flex flex-row justify-between text-xl mb-1">
              <div>Latest tasks</div>
            </div>
            <Task
              currentCoins={currentCoins}
              setCurrentCoins={setCurrentCoins}
            />
          </div>
          <div className="bg-white my-3 py-1 px-3 rounded-xl">
            <div className="font-semibold text-xl my-3">Your Stress</div>
            <MyChart sum={sum} />
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-wrap">
                {/* <div className="mr-6 flex flex-row font-semibold bg-yellow-400 w-fit py-2 px-8 my-4 rounded-full">
                  <div>Emotional Burnout</div>
                  <div className="ml-4">70%</div>
                </div> */}
                {/* <div className="mr-6 flex flex-row text-white font-semibold bg-purple-600 w-fit py-2 px-8 my-4 rounded-full">
                  <div>Anxiety</div>
                  <div className="ml-4">30%</div>
                </div> */}
                {/* <div className="mr-6 flex flex-row font-semibold bg-pink-400 w-fit py-2 px-8 my-4 rounded-full">
                  <div>Sum</div>
                  <div className="ml-4">
                    {sum[sum.length - 1]}
                    {console.log(sum)}
                  </div>
                </div> */}
              </div>
              <div>
                {/* <div className="bg-purple-700 rounded-2xl p-2 -mt-7">
                  <NavLink
                    to="/dailysurvey"
                    className="bg-purple-600 hover: inline-block font-bold rounded-lg p-3 text-white"
                  >
                    Take daily Survey
                  </NavLink>
                </div> */}
                <div className="bg-red-700 rounded-xl pb-2 hover:pb-1 hover:-mt-4 transition ease-in -mt-5">
                  <NavLink
                    to="/dailysurvey"
                    className="bg-red-600 inline-block font-bold rounded-lg p-3 text-white"
                  >
                    Take daily Survey
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="bg-white pt-1 pb-3 px-3 rounded-xl">
              <div className="font-semibold text-xl my-3">
                Recommended activities
              </div>
              <div className="flex">
                <NavLink
                  to="/breathe"
                  className="w-[150px] h-[150px] mr-3 cursor-pointer"
                >
                  <img
                    className="rounded-xl object-cover h-full"
                    src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/09/4-7-8-breathing-1388104915-770x533-1-650x428.jpg"
                    alt=""
                  />
                </NavLink>
                <NavLink
                  to="/yoga"
                  className="w-[150px] h-[150px] mr-3 cursor-pointer"
                >
                  <img
                    className="rounded-xl"
                    src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-asian-sportsman-meditating-in-yoga-tree-position-smiling-sportsman-standing-in-yoga-tree-position-young-sporty-man-doing-yoga-on-the-mat-vector-flat-design-illustration-square-layout_H7xj66o8I-_thumb.jpg"
                    alt=""
                  />
                </NavLink>
                <NavLink
                  to="/morningexercises"
                  className="w-[150px] h-[150px] mr-3 cursor-pointer"
                >
                  <img
                    className="rounded-xl"
                    src="https://static.vecteezy.com/system/resources/thumbnails/004/209/032/small/woman-with-earphones-listening-music-vector.jpg"
                    alt=""
                  />
                </NavLink>
                <NavLink
                  to="/games"
                  className="w-[150px] h-[150px] cursor-pointer"
                >
                  <img
                    className="rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvZsqMuiAgD5S6gNaYoTovI2pWz5MmZkKVA&usqp=CAU"
                    alt=""
                  />
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/therapist"
              className="bg-white pt-1 pb-3 px-3 rounded-xl ml-3"
            >
              <div className="font-semibold text-center text-xl mt-3 mx-2">
                Talk to an expert
              </div>
              <img
                className="w-[170px] h-[170px] cursor-pointer mx-auto"
                src="https://st3.depositphotos.com/12780408/17069/v/600/depositphotos_170693058-stock-illustration-chairman-of-the-board-cartoon.jpg"
                alt=""
              />
            </NavLink>
            <NavLink
              to="/journal"
              className="bg-white w-[190px] pt-1 pb-3 px-3 rounded-xl ml-3"
            >
              <div className="font-semibold text-center text-xl mt-3 mx-2">
                Journal
              </div>
              <img
                className="object-contain mx-auto h-[170px] cursor-pointer"
                src="https://st2.depositphotos.com/14746926/46389/v/450/depositphotos_463899526-stock-illustration-vector-illustration-note-book-headline.jpg"
                alt=""
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
