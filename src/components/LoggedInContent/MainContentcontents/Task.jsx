import React, { useState } from "react";

const Task = ({ currentCoins, setCurrentCoins }) => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handleKey(e) {
    if (e.key === "Enter") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }
  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(i) {
    setCurrentCoins(currentCoins + 20);
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== i;
      });
    });
  }
  return (
    <div>
      <div className="flex flex-row justify-between text-md mb-1">
        <input
          onKeyDown={handleKey}
          onChange={handleChange}
          type="text"
          value={inputText.charAt(0).toUpperCase() + inputText.slice(1)}
          className="outline-none"
          placeholder="Enter Task To Add"
          style={{ paddingRight: "740px" }}
        ></input>
        <button
          onClick={() => {
            addItem(inputText);
            setInputText("");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-purple-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <ul>
        {items.map((todo, i) => (
          <div className="flex justify-between">
            <li>
              {i + 1}. {todo}
            </li>
            <button
              onClick={() => {
                deleteItem(i);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-purple-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Task;
