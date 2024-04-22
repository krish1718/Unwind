import React, { createContext, useState } from "react";
// import Cart from "./MainContentcontents/Cart";
import Contact from "./MainContentcontents/Contact";
import Home from "./MainContentcontents/Home";
import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Community from "./MainContentcontents/Community";
import About from "./MainContentcontents/About";
import Activities from "./MainContentcontents/Activities";
import Profile from "./MainContentcontents/Profile";
import Breathe from "./MainContentcontents/Breathe";
import Yoga from "./MainContentcontents/Yoga";
import MorningExercises from "./MainContentcontents/MorningExercises";
import Games from "./MainContentcontents/Games";
import Therapist from "./MainContentcontents/Therapist";
import Journal from "./MainContentcontents/Journal";
import PaymentMethod from "./MainContentcontents/Payments/PaymentMethod";
import PaymentPage from "./MainContentcontents/Payments/PaymentPage";
import OTPpage from "./MainContentcontents/Payments/OTPpage";
import DailySurvey from "./MainContentcontents/DailySurvey";

const cartContext = createContext({
  cartItems: [],
  setcartItems: () => {},
});

const MainContent = () => {
  const [sum, setSum] = useState([24,17,23,13,15]);
  const [currentCoins, setCurrentCoins] = useState(1000);

  return (
    <>
      {/* <div>
        <Home />
      </div>
      <div>
        <Cart />
      </div> */}
      {/* <div>
        <Contact />
      </div> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <Profile
              sum={sum}
              setSum={setSum}
              currentCoins={currentCoins}
              setCurrentCoins={setCurrentCoins}
            />
          }
        />
        <Route path="/activities" element={<Activities />} />
        <Route path="/breathe" element={<Breathe />} />
        <Route path="/morningexercises" element={<MorningExercises />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/therapist" element={<Therapist />} />
        <Route path="/games" element={<Games />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dailysurvey"
          element={<DailySurvey sum={sum} setSum={setSum} />}
        />
        {/* Payment  */}
        <Route path="/paymentmethod/:id" element={<PaymentMethod />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/OTPpage" element={<OTPpage />} />
      </Routes>
    </>
  );
};

export default MainContent;
