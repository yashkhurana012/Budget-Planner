import React, { useContext } from "react";
import UserContext from "./ContextApi/UserContext";

function Price() {
  // console.log(expenses);
  const { expenses, setExpenses } = useContext(UserContext) ;
  const price = 2000;

  let total = price - expenses;

  return (
    <>
      <div>
        <p className="p-4 bg-[#E9ECEF] text-[#6c757d] px-8 text-lg font-medium mt-5 rounded-lg">Budget: Rs.{price}</p>
      </div>
      <div>
        <p className="p-4 bg-[#E9ECEF] px-8 text-lg font-medium  mt-5 rounded-lg text-[#198754]">Remaining: Rs.{total}</p>
      </div>
      <div>
        <p className="p-4  text-[#087990] px-8 text-lg font-medium  mt-5 rounded-lg bg-[#cff4fc]" >Spent so far:{expenses}</p>
      </div>
    </>
  );
}

export default Price;
