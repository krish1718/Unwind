import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Therapist = () => {
  const [type, setType] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/type`)
      .then(function(response) {
        setType(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const data = [
    {
      id: "1",
      tag: "Anxeity",
      name: "ADI BIST",
      qualification: "MA",
      rating: 3.54,
      price: 300,
      email: "ismkve@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/52ff5161-747b-4bdf-b846-c6f61c11fba8.png"
    },
    {
      id: "2",
      tag: "Identity",
      name: "SANJANA BHADANI",
      qualification: "MSc",
      rating: 4.66,
      price: 500,
      email: "sb@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/9e4357f0-1bad-4954-a2a8-65beb36bfa92.png"
    },
    {
      id: "3",
      tag: "Lifestyle",
      name: "YAMINI PUNJ",
      qualification: "MA and BA",
      rating: 2.83,
      price: 300,
      email: "yp@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/0ae0ca2f-f2dc-4ede-9345-995072a5cc2a.png"
    },
    {
      id: "4",
      tag: "Relationship",
      name: "SAHITHI MANNAR",
      qualification: "MA",
      rating: 5,
      price: 450,
      email: "sm@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/10591723-3781-49c7-809f-a300ce25af60.png"
    },
    {
      id: "5",
      tag: "Developmental Concerns",
      name: "EHSAAS MEHTA",
      qualification: "MA",
      rating: 4.33,
      price: 350,
      email: "em@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/e489a298-665c-44cb-bcd1-3f51da44fe1e.png"
    },
    {
      id: "6",
      tag: "Identity",
      name: "JANAKI NAGARAJA",
      qualification: "MSc and BA",
      rating: 4.83,
      price: 300,
      email: "jn@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/dccb99ab-1b6e-4796-b40d-b54e433e922b.png"
    },
    {
      id: "7",
      tag: "Overall Wellbeing",
      name: "DARSHANA DIXIT",
      qualification: "MSc",
      rating: 4.37,
      price: 400,
      email: "dd@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/03a9800c-0f3f-4ec6-8ecc-9c790dbfac67.png"
    },
    {
      id: "8",
      tag: "Trauma",
      name: "PUSHTI GOSALIA",
      qualification: "MA and BA",
      rating: 4.5,
      price: 500,
      email: "pg@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/28a5d485-cd55-4a8f-af3f-aaff7ad30f37.png"
    },
    {
      id: "9",
      tag: "Developmental Concerns",
      name: "JASAR KHAN",
      qualification: "MA ,M.Phil and BA",
      rating: 4.66,
      price: 300,
      email: "jk@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/8387cce2-5f0d-44a7-9f5a-ee59b652cc65.png"
    },
    {
      id: "10",
      tag: "Professional Concerns",
      name: "SAFAL SRIVASTAVA",
      qualification: "MA",
      rating: 4.58,
      price: 450,
      email: "ss@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/6acec9a1-fbcb-45f4-8192-18f5d5ad5a01.png"
    },
    {
      id: "11",
      tag: "Trauma",
      name: "NANDINI BANERJEE",
      qualification: "MSc",
      rating: 4.59,
      price: 500,
      email: "nb@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/f6cf61cd-b098-47c7-a950-a89c6d97b1f0.png"
    },
    {
      id: "12",
      tag: "Developmental Concerns",
      name: "ANUKRITI GOYAL",
      qualification: "MA and BA",
      rating: 3.85,
      price: 400,
      email: "ag1@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/59ae73df-a102-4c79-bfb5-1da73845f3f5.png"
    },
    {
      id: "13",
      tag: "Anxiety",
      name: "Jharika Zaveri",
      qualification: "MA and BA",
      rating: 4.11,
      price: 300,
      email: "sm1@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/30846123-ae00-4dc0-b0ff-40d9e75950c7.png"
    },
    {
      id: "14",
      tag: "Relationships",
      name: "JASPRIT KAUR",
      qualification: "MSc",
      rating: 3.89,
      price: 450,
      email: "jk1@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/d71fd2f2-8ed1-4f45-aa1d-62c7e636242d.png"
    },
    {
      id: "15",
      tag: "Trauma",
      name: "TAAMRA RANGANATH",
      qualification: "MSc",
      rating: 4.89,
      price: 450,
      email: "jk1@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/ccaa56d6-96b0-4c95-b86b-bc808d4fc915.png"
    },
    {
      id: "16",
      tag: "Anxeity",
      name: "AMBIKA CHAWLA",
      qualification: "MSc",
      rating: 3.99,
      price: 550,
      email: "jk1@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/d9be1d7f-5fd0-4559-9bc5-59f95cd93570.png"
    },
    {
      id: "17",
      tag: "Trauma",
      name: "SHEMIDA RAYAN",
      qualification: "MA",
      rating: 4.67,
      price: 350,
      email: "jk1@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/b09120af-24bd-4741-9126-24a240e548e5.png"
    },
    {
      id: "18",
      tag: "Trauma",
      name: "AMANDEEP SINGH",
      qualification: "M.Phil",
      rating: 4.37,
      price: 300,
      email: "jk1@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/b9f864c7-9ac0-48bd-9824-22def1d55b8d.png"
    }
  ];

  return (
    <div>
      <div className="bg-gray-200 flex flex-wrap">
        {type && <div className="text-xl w-screen text-center mt-5 text-purple-700 font-bold">Expertise Search</div>}
        {data.map((n) => {
          console.log("n.tag: " + n.tag);
          console.log("type: " + type);
          return (
            <>
              {type.includes(n.tag) && (
                <div className="bg-white p-3 m-5 rounded-xl w-[29vw]">
                  <div className="flex flex-row justify-between">
                    <div>
                      <div className="font-bold mb-2">{n.name}</div>
                      <div className="text-sm flex flex-row items-center">
                        <div>{n.rating}</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 ml-1 stroke-yellow-400 fill-yellow-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </div>
                      <div className="text-sm">
                        Qualification: {n.qualification}
                      </div>
                      <div className="text-sm">Expertise: {n.tag}</div>
                      <div className="text-sm font-bold mb-5">
                        Consultation fee: Rs {n.price}
                      </div>
                    </div>
                    <img
                      className="object-contain w-[100px]"
                      alt="pp"
                      src={n.src}
                    />
                  </div>
                  <div></div>
                  <NavLink to={`/PaymentMethod/${n.price}`}>
                    <button className="text-white w-full hover:bg-purple-700 transition ease-in bg-purple-600 font-semibold p-2 rounded-lg">
                      BOOK NOW
                    </button>
                  </NavLink>
                </div>
              )}
            </>
          );
        })}
        <div className="text-xl w-screen text-center mt-5 text-purple-700 font-bold">All Therapists</div>
        {data.map((n) => {
          console.log("n.tag: " + n.tag);
          console.log("type: " + type);
          return (
            <>
              {true && (
                <div className="bg-white p-3 m-5 rounded-xl w-[29vw]">
                  <div className="flex flex-row justify-between">
                    <div>
                      <div className="font-bold mb-2">{n.name}</div>
                      <div className="text-sm flex flex-row items-center">
                        <div>{n.rating}</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 ml-1 stroke-yellow-400 fill-yellow-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </div>
                      <div className="text-sm">
                        Qualification: {n.qualification}
                      </div>
                      <div className="text-sm">Expertise: {n.tag}</div>
                      <div className="text-sm font-bold mb-5">
                        Consultation fee: Rs {n.price}
                      </div>
                    </div>
                    <img
                      className="object-contain w-[100px]"
                      alt="pp"
                      src={n.src}
                    />
                  </div>
                  <div></div>
                  <NavLink to={`/PaymentMethod/${n.price}`}>
                    <button className="text-white w-full hover:bg-purple-700 transition ease-in bg-purple-600 font-semibold p-2 rounded-lg">
                      BOOK NOW
                    </button>
                  </NavLink>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Therapist;
