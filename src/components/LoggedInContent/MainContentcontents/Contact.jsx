import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [clicked,setClicked] = useState(false)

  useEffect(()=>{    
    if (name && email && message){
      console.log(name, email, message);
      axios
        .post("http://localhost:5000/contact", {
          name: name,
          email: email,
          message:message
        })
        .then(async (response) => {
          alert('Submitted')
          setName("")
          setEmail("")
          setMessage("")
        })
        .catch((error) => {
          console.log(error);
        });
      }
  },[clicked])

  return (
    <div>
      <div>
        <motion.section
          initial={{ y: "-90%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
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
          className="text-gray-600 body-font relative"
        >
          <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-1/2 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <img
                src="https://mhrc.psy.msu.edu/wp-content/uploads/2021/06/contactUs.png"
                alt=""
              />
            </div>
            <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-black text-3xl mb-1 font-serif font-bold title-font">
                Talk To Us
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                If you or someone you know has a mental health problem, there
                are ways to get help. Get in touch with our specialists to
                discuss the problem.
              </p>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button onClick={()=> setClicked(!clicked)} className="text-white bg-purple-600 hover:bg-purple-700 border-0 py-2 px-6 focus:outline-none font-bold rounded text-lg">
                Send
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
