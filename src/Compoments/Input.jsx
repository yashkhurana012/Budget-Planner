import { useRef, useState } from "react";
import { useContext } from "react";
import UserContext from "./ContextApi/UserContext";
function Input() {

  const { setText, setExpenses } = useContext(UserContext) ;

  const name = useRef();
  const number = useRef();
  const onClickHandler = () => {
    const planner = name.current.value;
    const cost = Number(number.current.value);
    if (planner !== "" && cost !== "") {
      setText((prev) => [...prev, { planner, cost }]);
      setExpenses((prev) => prev + cost);
    } else {
      alert("Please fill the planner");
    }
  };
  return (
    <>
      <div className="flex justify-between w-full  gap-5">
        <div className="w-full">
          <label htmlFor="plan">Name</label>
          <br />
          <input
            className="bg-white border border-gray-500 rounded-lg w-full mt-4 py-2 px-3"
            type="text"
            name=""
            id="plan"
            ref={name}
          />
        </div>
        <div className="w-full">
          <label htmlFor="cost">Cost</label>
          <br />
          <input
            className="bg-white border border-gray-500 rounded-lg w-full mt-4 py-2 px-3"
            type="number"
            name=""
            id="cost"
            ref={number}
          />
        </div>
      </div>
      <button
        className="py-2 px-8 text-lg font-medium bg-blue-600 mt-4 rounded"
        onClick={onClickHandler}
      >
        Save
      </button>
    </>
  );
}

export default Input;
