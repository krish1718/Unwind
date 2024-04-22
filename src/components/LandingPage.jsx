import React, { useRef } from "react";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import image from "../assets/Landingpageimagejpg.jpg";
import exercise from "../assets/exercise.jpg";
import yoga from "../assets/yoga.jpg";
import meditation from "../assets/meditation.jpg";
import socialize from "../assets/socialize.jpg";

const LandingPage = ({ setLandingpagevisibility }) => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="bg-gray-100 border-t border-gray-500">
      {/* // Landing Page  */}
      {/* // First page  */}
      <div className="min-h-[90vh] mt-[2vh]">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 pt-10 pb-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                className="container px-5 py-16 mx-auto "
              >
                <div className="text-7xl mb-4 font-bold  text-gray-900 font-Noto Serif">
                  Improving
                </div>
                <div className="text-purple-700 text-5xl font-bold font-Noto Serif">
                  Mental Care
                </div>
                <p className="my-8 leading-relaxed font-quicksand font-semibold">
                  Making it through life's toughest moments, Together. Your help
                  is just few clicks away. Let us know more about you by taking
                  a survey.
                </p>
                <button
                  onClick={() => setLandingpagevisibility(false)}
                  className="text-white bg-black hover:bg-gray-700 transition ease-in rounded-full py-3 px-9 font-semibold"
                >
                  Get started
                </button>
              </motion.div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="shadow-2xl object-cover object-center rounded w-[50vw]"
                alt="hero"
                src={image} // src="https://imgs.search.brave.com/8AQMBmc9e8R9nvgvTM-HgO5gSE4XHJtuigq7HZ13_V4/rs:fit:811:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/R1VoVGZ4dElnVnJB/UXhyX0Y2QjVBSGFF/ViZwaWQ9QXBp"
              />
            </div>
          </div>
        </section>
      </div>
      {/* // Second Part  */}
      <div className="min-h-[90vh] ">
        <section className="text-gray-600 body-font shadow-2xl mx-10 my-10 border-10">
          <div className="mb-5">
            <div className="text-5xl font-bold font-quicksand text-black ml-[10vw] p-5">
              Hundreds of highly
            </div>
            <div className="text-5xl font-bold font-serif text-red-400 ml-[15vw]">
              rated, verified experts.
            </div>
          </div>
          <div className="container mx-auto flex px-5 pt-5 pb-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover w-full md:w-[400px] mx-auto object-center rounded"
                alt="hero"
                src="https://www.kauveryhospital.com/doctorimage/recent/Dr-Raghuram---Cardio-thoracic-surgery2019-02-18%2012:58:54pm.jpg"
              />
            </div>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className=" lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            >
              <h1 className="title-font text-4xl font-bold font-quicksand text-gray-900">
                Rahul Sharma
              </h1>
              <p className="font-quicksand">Consultant</p>
              {/* // Stars  */}
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </span>
              <div className="mt-5">
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 my-auto stroke-green-700 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  145+ satisfied customers
                </div>
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 my-auto stroke-green-700 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  25 years of experience
                </div>
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 my-auto stroke-green-700 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Licensed therapist
                </div>
              </div>
              <div className="flex justify-center my-8">
                <button className="text-white bg-black hover:bg-gray-700 transition ease-in font-semibold border-0 py-2 px-6 rounded-full text-lg">
                  Reviews
                </button>
                <button className="ml-4 text-gray-700 bg-gray-200 hover:bg-gray-300 transition ease-in font-semibold py-2 px-6 rounded-full text-lg">
                  Linkedin
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      {/* // Third Part  */}
      <div className="min-h-[90vh]">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-2 pt-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <div className="text-5xl font-bold font-noto serif text-black">
                Improve your
              </div>
              <div className="text-5xl font-bold font-serif text-blue-400 ml-[5vw]">
                physical mental health.
              </div>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <p className="mb-8 text-lg font-quicksand font-semibold">
                Here are some tips to help you get started with self-care. Even
                small acts of self-care in your daily life can have a big
                impact.
              </p>
              <div className="flex justify-center">
                <button className="text-white bg-black hover:bg-gray-700 transition ease-in font-semibold border-0 py-2 px-6 rounded-full text-lg">
                  See all tips
                </button>
              </div>
            </div>
          </div>
          {/* // Cards  */}
          {/* <div className="flex flex-row justify-evenly text-black px-5 mt-5">
            <div className="w-1/4 border rounded-xl py-3 px-7">
              <img
                src="https://imgs.search.brave.com/akq9_jHYZH81QGbZ_5vnvFiiEo45LmbROSo8kPLv1Iw/rs:fit:626:626:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXZlY3Rv/ci9oZWFsdGgtZml0/bmVzcy1jYXJ0b29u/XzI0NjQwLTI1NzA3/LmpwZw"
                alt=""
                className="h-[40vh]"
              />
              <div className="font-serif font-bold text-2xl mb-3">
                Get regular exercise.
              </div>
              <div>
                Just 30 minutes of walking every day can help boost your mood
                and improve health.
              </div>
              <button className="my-3 font-bold flex flex-row">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.0}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
            <div className="w-1/4 border rounded-xl py-3 px-7">
              <img
                src="https://imgs.search.brave.com/akq9_jHYZH81QGbZ_5vnvFiiEo45LmbROSo8kPLv1Iw/rs:fit:626:626:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXZlY3Rv/ci9oZWFsdGgtZml0/bmVzcy1jYXJ0b29u/XzI0NjQwLTI1NzA3/LmpwZw"
                alt=""
                className="h-[40vh]"
              />
              <div className="font-serif font-bold text-2xl mb-3">
                Get regular exercise.
              </div>
              <div>
                Just 30 minutes of walking every day can help boost your mood
                and improve health.
              </div>
              <button className="my-3 font-bold flex flex-row">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.0}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
            <div className="w-1/4 border rounded-xl py-3 px-7">
              <img
                src="https://imgs.search.brave.com/akq9_jHYZH81QGbZ_5vnvFiiEo45LmbROSo8kPLv1Iw/rs:fit:626:626:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXZlY3Rv/ci9oZWFsdGgtZml0/bmVzcy1jYXJ0b29u/XzI0NjQwLTI1NzA3/LmpwZw"
                alt=""
                className="h-[40vh]"
              />
              <div className="font-serif font-bold text-2xl mb-3">
                Get regular exercise.
              </div>
              <div>
                Just 30 minutes of walking every day can help boost your mood
                and improve health.
              </div>
              <button className="my-3 font-bold flex flex-row">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.0}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 my-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div> 
          */}
          <div>
            {/* <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                strokeWidth="10%"
                fill="none"
                className="indicator"
                style={{ pathLength: scrollXProgress }}
              />
            </svg> */}
            <ul
              className="flex mt-10 pb-5 overflow-x-scroll w-[90vw] mx-auto"
              ref={ref}
            >
              <li className="mx-5 min-w-[400px]">
                <div className="px] shadow-2xl border rounded-xl py-3 px-7">
                  <img
                    src={exercise}
                    alt=""
                    className="h-[40vh] object-contain"
                  />
                  <div className="font-serif font-bold text-2xl mb-3">
                    Get regular exercise.
                  </div>
                  <div className="font-quicksand">
                    Just 30 minutes of walking every day can help boost your
                    mood and improve health.
                  </div>
                  <button className="my-3 font-bold flex flex-row">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 my-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li className="mx-5 min-w-[400px]">
                <div className="px] shadow-2xl border rounded-xl py-3 px-7">
                  <img
                    src={yoga}
                    alt=""
                    className="h-[35vh] mx-auto my-4 object-cover rounded-xl"
                  />
                  <div className="font-serif font-bold text-2xl mb-3">
                    Yoga.
                  </div>
                  <div className="font-quicksand">
                    Yoga can help overcome your worries and fears by calming
                    your center and allowing you to focus on the present.
                  </div>
                  <button className="my-3 font-bold flex flex-row">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 my-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li className="mx-5 min-w-[400px]">
                <div className="px] shadow-2xl border rounded-xl py-3 px-7">
                  <img
                    src={meditation}
                    alt=""
                    className="h-[40vh] object-contain"
                  />
                  <div className="font-serif font-bold text-2xl mb-3">
                    Mindfulness Meditation.
                  </div>
                  <div className="font-quicksand">
                    Mindful breathing allows us to return to and stay in the
                    present.
                  </div>
                  <button className="my-3 font-bold flex flex-row">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 my-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li className="mx-5 min-w-[400px]">
                <div className="px] shadow-2xl border rounded-xl py-3 px-7">
                  <img
                    src={socialize}
                    alt=""
                    className="h-[40vh] object-contain"
                  />
                  <div className="font-serif font-bold text-2xl mb-3">
                    Socialize!
                  </div>
                  <div className="font-quicksand">
                    Reconnect with your friends and family.
                  </div>
                  <button className="my-3 font-bold flex flex-row">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 my-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* // Fourth Part  */}
      <div className="mx-10 min-h-[90vh] mt-32">
        <div className="mx-[3vw] text-center flex flex-wrap justify-between">
          <div className="flex items-center">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              //   exit={{
              //     x: "-100%",
              //     opacity: 0,
              //     transition: { duration: 0, delay: 0 },
              //   }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="shadow-2xl p-24 mb-8 font-semibold text-2xl bg-purple-200 rounded-full"
            >
              <p> All over the world,</p>
              <div className="text-7xl">
                280 Million
                <br /> people
              </div>
              <br />
              suffer from depression.
            </motion.div>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              //   exit={{
              //     x: "-100%",
              //     opacity: 0,
              //     transition: { duration: 0, delay: 0 },
              //   }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <div className="font-Roboto h-fit px-10 lg:px-20 mb-8 font-semibold text-3xl rounded-full">
                Most people don't reach out for help.
                <br />
                <a className="text-5xl font-quicksand text-purple-600">
                  {" "}
                  We are glad you did!
                </a>
              </div>
              <img
                className="mx-auto shadow-2xl"
                src="https://imgs.search.brave.com/n3zhhH5MnIeUvp3LqMq59PIYFWwuC5Ve14LTAzrWEbg/rs:fit:416:416:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9tZW50YWwtaGVh/bHRoLXByb2JsZW1z/LWZsYXQtdmVjdG9y/LWNvbmNlcHQtdmVj/dG9yLWlkMTE4MTU4/MTc1Mj9rPTYmbT0x/MTgxNTgxNzUyJnM9/MTcwNjY3YSZ3PTAm/aD1JM1VqNkJ3azBa/Tm5lU0l2a25Fa0dh/SkRCZUtnbXdBLWNr/YTQxYjdpdFI0PQ"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default LandingPage;
