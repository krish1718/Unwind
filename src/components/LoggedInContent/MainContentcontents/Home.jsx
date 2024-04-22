import React, { useRef } from "react";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Caraousel from "./Caraousel";
import InitialQuestions from "./InitialQuestions";
// import { Dialog, Transition } from "@headlessui/react";

const Home = () => {
  const [initialquestions, setinitialquestions] = useState(true);

  return (
    <div>
      {/* <div>Previous Questions</div> */}
      {initialquestions ? (
        <InitialQuestions initialquestions={initialquestions} setinitialquestions={setinitialquestions} />
      ) : (
        <Caraousel />
      )}
      <hr />
    </div>
  );
};

export default Home;
