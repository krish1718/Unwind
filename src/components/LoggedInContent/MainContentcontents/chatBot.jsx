import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const chatBot = () => {
  const steps = [
    {
      id: "0",
      message: "Hey User!",

      // This calls the next id
      // i.e. id 1 in this case
      trigger: "1",
    },
    {
      id: "1",

      // This message appears in
      // the bot chat bubble
      message: "Please write your username",
      trigger: "2",
    },
    {
      id: "2",

      // Here we want the user
      // to enter input
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: " hi {previousValue}, how can I help you?",
      trigger: 4,
    },
    {
      id: "4",
      options: [
        // When we need to show a number of
        // options to choose we create alist
        // like this
        { value: 1, label: "View Activities", trigger: "7" },
        { value: 2, label: "Get help regarding therapy", trigger: "2" },
      ],
      end: true,
    },
    {
      id: "7",
      options: [
        { value: 8, label: "Number 1", trigger: "4" },
        { value: 9, label: "Number 2", trigger: "3" },
        // { value: 10, label: "Number 3", trigger: "3" },
      ],
    },
  ];

  // Creating our own theme
  const theme = {
    background: "#f2caee",
    headerBgColor: "#7e22ce",
    headerFontSize: "20px",
    botBubbleColor: "#7e22ce",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "green",
    userFontColor: "white",
  };

  // Set some properties of the bot
  const config = {
    // botAvatar: "img.png",
    floating: true,
  };

  return (
    <div className="fixed bottom-10 right-10 z-40">
      <div className="bg-white">
        {/* ChatBot
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg> */}
        <ThemeProvider theme={theme}>
          <ChatBot
            // This appears as the header
            // text for the chat bot
            headerTitle="GeekBot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default chatBot;
