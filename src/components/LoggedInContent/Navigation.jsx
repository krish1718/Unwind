import React from "react";
import { HashRouter as Router, Routes, NavLink } from "react-router-dom";
import VoiceAssistant from "../VoiceAssistant";
// import AdminContent from "./AdminContents/AdminContent";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import ChatBot from "./MainContentcontents/chatBot";

const Navigation = ({ setLoginView }) => {
  return (
    <div className="font-sans">
      <Router>
        <Header setLoginView={setLoginView} />
        <MainContent />
        <Footer />
        <ChatBot />
        {/* <VoiceAssistant /> */}
      </Router>
    </div>
  );
};

export default Navigation;
