import React from "react";
import { MdStarRate } from "react-icons/md";
import Girl from "../assets/girl.png";
import Man from "../assets/guy.jpg";
export default function Testimonies() {
  return (
    <div className="container my-10">
      <h1 className="font-semibold text-4xl">Customer Testimonials</h1>
      <p className="py-5 mt-5">
        {" "}
        "Thanks for the food bank, I can feed my family better."
      </p>
      <div id="testimonies" className=" flex flex-col lg:flex-row gap-5">
        {/* First Testimony */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex text-4xl">
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
          </div>

          <div className="flex items-center gap-5 my-10">
            <img src={Girl} alt="" className="w-[60px] rounded-full" />
            <div className="w-[240px]">
              <h6 className="text-xl font-bold">Smith Bonuja</h6>
              <p>Mother, local</p>
              <p>Resident</p>
              <h1 className="text-right font-black">Webflow</h1>
            </div>
          </div>
        </div>

        {/* First Testimony */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex text-4xl">
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
          </div>

          <div className="flex items-center gap-5 my-10">
            <img
              src={Man}
              alt=""
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div className="w-[240px]">
              <h6 className="text-xl font-bold">Smith Bonuja</h6>
              <p>Mother, local</p>
              <p>Resident</p>
              <h1 className="text-right font-black">Webflow</h1>
            </div>
          </div>
        </div>

        {/* First Testimony */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex text-4xl">
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
          </div>

          <div className="flex items-center gap-5 my-10">
            <img src={Girl} alt="" className="w-[60px] rounded-full" />
            <div className="w-[240px]">
              <h6 className="text-xl font-bold">Smith Bonuja</h6>
              <p>Mother, local</p>
              <p>Resident</p>
              <h1 className="text-right font-black">Webflow</h1>
            </div>
          </div>
        </div>

        {/* Second Testimony */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex text-4xl">
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
            <MdStarRate className="text-[min(10vw,65px)] text-orange-500" />
          </div>

          <div className="flex items-center gap-5 my-10">
            <img src={Girl} alt="" className="w-[60px] rounded-full" />
            <div className="w-[240px]">
              <h6 className="text-xl font-bold">Smith Bonuja</h6>
              <p>Mother, local</p>
              <p>Resident</p>
              <h1 className="text-right font-black">Webflow</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
