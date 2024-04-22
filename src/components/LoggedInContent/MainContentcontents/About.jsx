import React from "react";
import Breathe from "./Breathe";
import aboutImg from "../../../assets/aboutImg.jpg";
import { motion } from "framer-motion";

const About = () => {
 

  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="h-[100vh]">
            <div className=" bg-purple-200 ">
              <div className=" container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img
                    className="object-cover object-center rounded-xl"
                    alt="hero"
                    src="https://www.dreamhost.com/blog/wp-content/uploads/2020/11/The-Perfect-About-Us-Page-Feature-750x499.jpg"
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-7xl text-4xl mb-4 font-medium text-gray-900">
                    About Unwind
                    <br className="hidden lg:inline-block" />
                  </h1>
                  <p className="mb-8 leading-relaxed">
                    Unwind was started with one mission:
                    <b> to improve the health and happiness of the world.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="flex h-screen">
            <li className="mx-5 min-w-[400px] hover:scale-110 transition ease-in">
              <div className=" rounded-xl py-3 px-7">
                <img
                  src="https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?w=740&t=st=1674102973~exp=1674103573~hmac=18cf248395ba675c398b7a37e0d87fc99f6da7dc146b82b8029db576da130c6ds"
                  alt=""
                  className="mx-auto h-[40vh] object-contain"
                />
                <div className="text-purple-600 text-center font-serif font-bold text-2xl mb-3">
                  Who we are
                </div>
                <div>
                  Think of Unwind as your mind’s best friend. We’re here for you
                  whenever you need us, wherever you are, helping you get
                  through tough times and find joy in every day.
                </div>
              </div>
            </li>
            <li className="mx-5 min-w-[400px] hover:scale-110 transition ease-in">
              <div className="rounded-xl py-3 px-7">
                <img
                  src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1060&t=st=1674102558~exp=1674103158~hmac=df8cf98b1b596b11b2e56dcbf7a362cd65c1bb7b42b391f04b9ab866b92a2498"
                  alt=""
                  className="mx-auto h-[40vh] object-contain"
                />
                <div className="text-purple-600 text-center font-serif font-bold text-2xl mb-3">
                  What we do
                </div>
                <div>
                  Through science-backed meditation and mindfulness tools,
                  Unwind helps you create life-changing habits to support your
                  mental health and find a healthier, happier you.
                </div>
              </div>
            </li>
            <li className="mx-5 min-w-[400px] hover:scale-110 transition ease-in">
              <div className="rounded-xl py-3 px-7">
                <img
                  src="https://previews.123rf.com/images/tynyuk/tynyuk1902/tynyuk190200008/125007787-meditating-man-over-isolated-background-keep-calm-vector-illustration-in-cartoon-style.jpg"
                  alt=""
                  className="mx-auto h-[40vh] object-contain"
                />
                <div className="text-purple-600 text-center font-serif font-bold text-2xl mb-3">
                  Why we do it
                </div>
                <div>
                  Unwind is proven to reduce stress by 14% in just 10 days. It
                  can also help you relax your mind in minutes, improve focus,
                  and get the best sleep ever.
                </div>
              </div>
            </li>
          </ul>
          <ul className="flex mx-10">
            <motion.li
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
            >
              <div className="mx-10 rounded-xl flex items-center justify-center title-font text-8xl mb-4 font-medium text-black text-center w-[40vw] h-[70vh] bg-purple-200">
                <div className="">
                  <img src={aboutImg} alt="" />
                </div>
              </div>
            </motion.li>
            <motion.li
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
              <div className="h-screen">
                <div className="mx-10 mt-10 text-purple-600 text-center font-serif font-bold text-2xl mb-3 w-[40vw]">
                  Unwind: Helping people with mental health care around the
                  world
                </div>
                <div className="mx-10 text-center text-xl mb-3 w-[40vw] h-[70vh]">
                  Unwind is part of Unwind Health, the world’s most accessible,
                  comprehensive provider of mental health and well-being care.
                  Unwind Health also consists of Unwind for Work and Ginger, who
                  partner with over 2,500 companies and health plans to provide
                  access to meditation, mindfulness, coaching, therapy, and
                  psychiatry to their members and employees. Partners include
                  Starbucks, Adobe, Delta Air Lines, ViacomCBS, Cigna, and
                  Kaiser Permanente.
                </div>
              </div>
            </motion.li>
          </ul>
          {/* <div className="flex">
            <div>
              <div className="mx-20 text-center text-purple-600 font-serif text-6xl mb-3 w-[40vw]">
                <b>Try our Unwind App for free today</b>
              </div>
              <div className="mx-20 text-center font-serif text-2xl mb-3 w-[40vw]">
                Find more joy, less stress, and the best sleep ever with Unwind.
                Try it for free today.
              </div>
            </div>

            <div>
              <img
                src="https://images.ctfassets.net/v3n26e09qg2r/3N2HEJHYnBMKQi1YV9CTpg/81b0546b52a78e6ea3bb63ec8df18bce/phones_and_circle_bg.png?w=1686&h=1812&q=80&fm=webp"
                alt=""
                className="mx-20 object-position:center h-[40vh] object-contain"
              />
            </div>
          </div> */}
        </section>
      </div>
      
    </>
  );
};

export default About;
