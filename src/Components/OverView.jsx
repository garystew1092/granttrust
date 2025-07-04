import React, { useContext } from "react";
import Girl from "../assets/girl.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { GiPadlock } from "react-icons/gi";
import { TbShare } from "react-icons/tb";
import { FiTag } from "react-icons/fi";
import { TbTransfer } from "react-icons/tb";
import { UserContext } from "../Context/userContext";

export default function OverView() {
  const {user} = useContext(UserContext);
  console.log(`User data:`, user);
  return (
    <div>
      <h1 className="font-bold">Dashboard</h1>
      <div className="shadow-lg">
        <div className="bg-white p-4">
          <div>
            <img src={Girl} className="w-10 h-10 rounded-full object-center" />
          </div>
          <div className="mt-3">
            <h2>
              <b>Name</b>: {user.firstname + " " + user.lastname}
            </h2>
            <h2>
              <b>Account</b>: {user.role === "admin" ? "Admin" : "Member"}
            </h2>
          </div>

                <div className="mt-3">
            <h2>
              <b>Country</b>: {user.country || "Not specified"}
            </h2>
            <h2>
              <b>State</b>: {user.state || "Not specified"}
            </h2>
          </div>
          <div className="mt-3">
 <h2>
              <b>Postal Code</b>: {user.postalcode || "Not specified"}
            </h2>

            </div>


          <div className=" mt-5 flex  justify-between">
            <div>
              <small>Items</small>
              <h2>{user.itemCount}</h2>
            </div>
            <div>
              <small>Transfers</small>
              <h2>0</h2>
            </div>

            <div>
              <button className="  font-bold bg-amber-500 p-2 rounded-lg text-[11px] text-white cursor-pointer hover:bg-amber-600">
                View Assets
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold flex justify-between my-4 ">
        <h2>Transaction Queue</h2>
       <h2 className="flex cursor-pointer items-center gap-1 hover:scale-105 transition-transform duration-200">
  View All <IoIosArrowDroprightCircle />
</h2>
      </div>
      <div className="bg-white p-4">
        <div className="flex justify-center items-center">
          <div className="w-[100px] h-[100px] bg-gray-100 rounded-full flex justify-center items-center">
            <FiClock className="text-6xl text-gray-400" />
            <LuArrowUpDown className="text-6xl text-green-600" />
          </div>
        </div>
        <p className="text-center">This Safe has no queued transactions</p>
      </div>
      <h2 className="mt-5 font-bold">Grant Trust App</h2>
      <div className="bg-white mt-3 flex gap-20">
        <div className="p-3">
          <div>
            <div className="flex justify-between">
              <div>
                <GiPadlock className="text-amber-500 text-3xl" />
                <h4 className="font-semibold">Insurance</h4>
              </div>

              <div className="cursor-pointer">
               <TbShare className="text-gray-400 hover:text-amber-500 transition-colors duration-300 delay-100" />
  <FiTag className="text-gray-400 hover:text-amber-500 transition-colors duration-300 delay-100" />
              </div>
            </div>
            <p className="text-sm my-5">
              Entry to the products and services Grant Trust provides is secure.
            </p>
          </div>
        </div>

        <div>
          <div className="p-3">
            <div>
              <div className="flex justify-between">
                <div>
                  <TbTransfer className="text-amber-500 text-3xl" />
                 
                  <h4 className="font-semibold">Track item</h4>
                </div>
<div className="cursor-pointer">
  <TbShare className="text-gray-400 hover:text-amber-500 transition-colors duration-300 delay-100" />
  <FiTag className="text-gray-400 hover:text-amber-500 transition-colors duration-300 delay-100" />
</div>
              </div>
              <p className="text-sm my-5">
                With cutting edge technology, You can track, the condition, location and so more.
              </p>

              <button className="bg-amber-500 p-2  cursor-pointer hover:bg-amber-600 rounded-lg text-[13px] lg:text-sm  text-white">Track Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
