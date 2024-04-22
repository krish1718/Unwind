import React, { useContext } from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { usernameContext, passwordContext } from "../../App";

import axios from "axios";
import Navigation from "../LoggedInContent/Navigation";
import image from "../../assets/LoginPageImage.jpg";
import logoimage from "../../assets/unwind-logo.png";
import { Navigate } from "react-router-dom";

export const LoginForm = ({ setLoginView }) => {
  //   const [username, setUsername] = useState();
  //   const [password, setPassword] = useState();
  const { username, setUsername } = useContext(usernameContext);
  const { password, setPassword } = useContext(passwordContext);
  const usernameRef = useRef();
  const passwordRef = useRef();

  // Testing
  //   useEffect(() => {
  //     alert(username + password);
  //   }, [username, password]);

  // SignUp content
  const [logIn, setLogIn] = useState(true);
  const [signUpUsername, setSignUpUsername] = useState();
  const [signUpPassword, setSignUpPassword] = useState();

  // axios signup
  useEffect(() => {
    if (username && password){
      console.log(username, password);
      axios
        .post("http://localhost:5000/signup", {
          username: username,
          password: password,
        })
        .then((response) => console.log("hii"))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [username, password]);

  // axios login
  useEffect(() => {
    if (username && password)
      axios
        .post("http://localhost:5000/login", {
          username: username,
          password: password,
        })
        .then(async (response) => {
          alert("hi");
          const body = await response.json();
          console.log(body);
        })
        // .then(async function getDetails(response){
        //   const body = await response.json();
        // })
        .catch((error) => {
          console.log(error);
        });
  }, [username, password]);

  // login with localstorage
  // const [usernameArray, setusernameArray] = useState([
  //   "Krish",
  //   "Rishab",
  //   "Shreyans",
  //   "Ishaan",
  // ]);
  // const [passwordArray, setpasswordArray] = useState(["1234", "0000"]);

  // useEffect(() => {
  //   localStorage.getItem(usernameArray);
  //   localStorage.getItem(passwordArray);
  //   setusernameArray(usernameArray);
  //   setpasswordArray(passwordArray);
  // }, []);

  // useEffect(() => {
    // if (username && password) {
    //   localStorage.setItem("usernames", usernameArray);
    //   localStorage.setItem("passwords", passwordArray);
    // }
  //   setInArray();
  // }, [username, password]);

  // function setInArray() {
  //   if (username && password) {
  //     localStorage.setItem("usernames", usernameArray);
  //     localStorage.setItem("passwords", passwordArray);
  //     console.log(usernameArray);
  //   }
  // }

  // LoggedInContent
  //   const [logInContent, setLogInContent] = useState(false);

  // Error
  // const [error, setError] = useState(false);
  // const handleEnter = (e) => {
  //   if (e.key === "Enter") {
      // if (
      //   usernameArray.includes(usernameRef.current.value) &&
      //   passwordArray.includes(passwordRef.current.value)
      // ) {
      //   setUsername(usernameRef.current.value);
      //   // setPassword(passwordRef.current.value);
      //   setLoginView(false);
      // } else {
      //   // setError(true);
      //   setLoginView(true);
      // }
  //     setLoginView(false);
  //   }
  // };

  return (
    <div>
      <section className="bg-gray-200 min-h-screen p-6 items-center w-screen">
        <div className="flex flex-col mx-auto justify-center lg:flex-row xl:flex-row mt-[55px]">
          <div className="rounded-l-lg flex lg:w-[50%] xl:w-[50%] max-w-xl items-center bg-white">
            {/* <div className="text-white my-auto px-16 py-40">
              <div className="inline-block">
                <h4 className="my-4 text-3xl font-bold">
                  Your Mental Health Matters
                </h4>
                <p className="text-md mt-2">
                  We do not use cookies, tracking scripts or any third party in
                  browser software.
                </p>
              </div>
            </div> */}
            <img
              className="h-[50vh] object-contain mx-auto"
              src={image}
              alt=""
            />
          </div>
          <div className="bg-white lg:w[50%] xl:w[50%] pr-[80px] w-1/2 max-w-xl p-5 rounded-r-lg">
            <div className="mt-[10vh] my-auto">
              <div className="text-center mx-auto">
                <img
                  src={logoimage}
                  className="h-[25px] mx-auto mb-6 my-auto transition ease-in hover:scale-110"
                  alt=""
                />
                <h4 className="mt-1 text-xl font-bold mb-3 pb-1">
                  Welcome to Unwind
                </h4>
              </div>
              <form action="http://localhost:5000/login" method="post">
                <p className="text-lg my-3 text-center">
                  Please login to your account
                </p>

                <div className="form-outline my-4 mx-auto w-fit">
                  <input
                    type="text"
                    name="username"
                    id="form2Example11"
                    className="form-control drop-shadow-md mx-auto md:w-[400px] p-2 rounded-lg border-2 hover:border-purple-700 "
                    placeholder="Username"
                    ref={usernameRef}
                    // onChange={(e) => {
                    //   setnameDetails(e.target.value);
                    // }}
                    onClick={() => {
                      navigator.vibrate(50);
                    }}
                  />
                </div>

                <div className="form-outline mb-4 mx-auto w-fit">
                  <input
                    type="password"
                    name="password"
                    id="form2Example22"
                    className="form-control drop-shadow-md mx-auto md:w-[400px] p-2 rounded-lg border-2 hover:border-purple-700"
                    placeholder="Master Password"
                    ref={passwordRef}
                    // onKeyDown={(e) => handleEnter(e)}
                    // onChange={(e) => {
                    //   setpasswordDetails(e.target.value);
                    // }}
                    onClick={() => {
                      navigator.vibrate(50);
                    }}
                  />
                </div>

                {/* Error */}
                {/* {error && (
                  <div className="text-red-600 text-center font-semibold">
                    Error, wrong details!
                  </div>
                )} */}

                {logIn ? (
                  <div className="text-center pt-1 my-5 pb-1">
                    <button
                      className="block drop-shadow-xl fa-lg hover:bg-purple-800 transition ease-in bg-purple-700 px-4 py-2 rounded-lg text-white mx-auto mb-3"
                      type="submit"
                      onClick={() => {
                        //   navigator.vibrate(50);
                        //   login.setLogin("true");
                        // if (
                        //   usernameArray.includes(usernameRef.current.value) &&
                        //   passwordArray.includes(passwordRef.current.value)
                        // ) {
                        // } else {
                        //   setError(true);
                        // }
                        setUsername(usernameRef.current.value);
                        // setPassword(passwordRef.current.value);
                        <Navigate to="/" replace={true} />;
                        setLoginView(false);
                      }}
                    >
                      LOG IN
                    </button>
                  </div>
                ) : (
                  <div className="text-center pt-1 my-5 pb-1">
                    <button
                      className="block drop-shadow-xl fa-lg hover:bg-purple-800 transition ease-in bg-purple-700 px-4 py-2 rounded-lg text-white mx-auto mb-3"
                      type="button"
                      onClick={() => {
                        //   navigator.vibrate(50);
                          // login.setLogin("true");
                        // setusernameArray([
                        //   ...usernameArray,
                        //   usernameRef.current.value,
                        // ]);
                        // setpasswordArray([
                        //   ...passwordArray,
                        //   passwordRef.current.value,
                        // ]);
                        setUsername(usernameRef.current.value);
                        setPassword(passwordRef.current.value);
                        // setLoginView(false);
                        setLogIn(true);
                      }}
                    >
                      SIGN UP
                    </button>
                  </div>
                )}

                {logIn && (
                  <div className="flex space-x-2 justify-center items-center pb-4">
                    <p className="my-auto">Don't have an account?</p>
                    {/* <button
                        type="button"
                        className="bg-red-600 text-xs font-semibold transition ease-in border-2 border-red-600 py-2 px-4 rounded-lg text-white hover:text-red-600 hover:bg-white"
                        onClick={() => {
                          // navigator.vibrate(50);
                          // Signup.setSignUpstate("true");
                          setLogIn(false);
                        }}
                      >
                        CREATE NEW
                      </button> */}
                    <div
                      onClick={() => {
                        // navigator.vibrate(50);
                        setLogIn(true);
                      }}
                      className="hover:underline text-red-500 cursor-pointer"
                    >
                      Create New
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  //   return (
  //     <div>
  //       {!logInContent && (
  //         <div className="flex flex-wrap min-h-[90vh] bg-gray-800 text-white">
  //           <div className="w-1/2 text-5xl my-auto py-20 border-dotted border-r-[7px] border-gray-400 font-semibold flex flex-row justify-center">
  //             <img
  //               className="w-14 h-14 mx-2 object-contain"
  //               src="https://imgs.search.brave.com/8uU8DIGY_DzyZu-J8MsIqehweo9t3wYsNj22-euar_Q/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvZG93bmxv/YWQvZ3JlZW4vdHdp/dHRlci01MTIucG5n"
  //               alt=""
  //             />
  //             meowify
  //           </div>
  //           <div className="w-1/2 py-3 px-4 my-auto flex flex-col items-center">
  //             <div className="flex flex-wrap justify-evenly rounded-md font-semibold bg-green-400 my-6 w-full max-w-[400px]">
  //               <button
  //                 onClick={() => {
  //                   setLogIn(true);
  //                 }}
  //                 className={`${
  //                   logIn
  //                     ? "border-4 rounded-md border-green-600 bg-green-500"
  //                     : ""
  //                 } p-2 w-1/2`}
  //               >
  //                 Log In
  //               </button>
  //               <button
  //                 onClick={() => {
  //                   setLogIn(false);
  //                 }}
  //                 className={`${
  //                   !logIn
  //                     ? "border-4 rounded-md border-green-600 bg-green-500"
  //                     : ""
  //                 } p-2 w-1/2`}
  //               >
  //                 Sign Up
  //               </button>
  //             </div>
  //             {logIn ? (
  //               <>
  //                 <input
  //                   onFocus={() => {}}
  //                   className="block w-full text-green-500 max-w-[400px] my-2 rounded-md p-2 bg-transparent border-2 border-gray-300"
  //                   ref={usernameRef}
  //                   type="text"
  //                   placeholder="Username"
  //                 />
  //                 <input
  //                   onFocus={() => {}}
  //                   className="block w-full text-green-500 max-w-[400px] my-2 rounded-md p-2 bg-transparent border-2 border-gray-300"
  //                   ref={passwordRef}
  //                   type="text"
  //                   placeholder="Password"
  //                 />
  //                 <div className="flex w-full max-w-[400px] space-x-2">
  //                   <button
  //                     className="bg-green-500 border-4 border-green-600 rounded-md w-full font-bold hover:bg-green-600 transition ease-in p-2 my-6"
  //                     onClick={() => {
  //                       if (
  //                         usernameRef.current.value === "" ||
  //                         passwordRef.current.value === ""
  //                       ) {
  //                         alert(
  //                           "Invalid Input! Please enter a valid username and password"
  //                         );
  //                         return;
  //                       }
  //                       setUsername(usernameRef.current.value);
  //                       setPassword(passwordRef.current.value);
  //                       usernameRef.current.value = "";
  //                       passwordRef.current.value = "";
  //                     }}
  //                   >
  //                     Log In
  //                   </button>
  //                   <button className="bg-green-500 border-4 border-green-600 max-w-[200px] rounded-md font-bold hover:bg-green-600 transition ease-in px-4 my-6">
  //                     G
  //                   </button>
  //                 </div>
  //               </>
  //             ) : (
  //               <>
  //                 <input
  //                   onFocus={() => {}}
  //                   className="block w-full text-green-500 max-w-[400px] my-2 rounded-md p-2 bg-transparent border-2 border-gray-300"
  //                   ref={usernameRef}
  //                   type="text"
  //                   placeholder="Username"
  //                 />
  //                 <input
  //                   onFocus={() => {}}
  //                   className="block w-full text-green-500 max-w-[400px] my-2 rounded-md p-2 bg-transparent border-2 border-gray-300"
  //                   ref={passwordRef}
  //                   type="text"
  //                   placeholder="Password"
  //                 />
  //                 <button
  //                   className="bg-green-500 border-4 border-green-600 w-full max-w-[400px] rounded-md font-bold hover:bg-green-600 transition ease-in p-2 my-6"
  //                   onClick={() => {
  //                     if (
  //                       usernameRef.current.value === "" ||
  //                       passwordRef.current.value === ""
  //                     ) {
  //                       alert(
  //                         "Invalid Input! Please enter a valid username and password"
  //                       );
  //                       return;
  //                     }
  //                     setUsername(usernameRef.current.value);
  //                     setPassword(passwordRef.current.value);
  //                     // usernameRef.current.value = "";
  //                     // passwordRef.current.value = "";
  //                     setLogInContent(true);
  //                   }}
  //                 >
  //                   Sign Up
  //                 </button>
  //               </>
  //             )}
  //           </div>
  //         </div>
  //       )}
  //       {logInContent && (
  //         <div>
  //           <Navigation />
  //         </div>
  //       )}
  //     </div>
  //   );
};
