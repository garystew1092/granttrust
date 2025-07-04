import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiLockStarFill } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
export default function MidHero() {
  return (
    <div className="my-1 px-0 py-10">
      <div className="container">
        <div id="heading">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-center my-5">
            Discover the Life-Changing Benefits of Our Security Service
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around">
  <div className="w-full lg:w-70 pt-5">
    <AiOutlineSafetyCertificate className="text-6xl text-green-700 mx-auto lg:mx-0"/>
    <h2 className="text-[min(4, 24px)] font-bold my-5 text-center lg:text-left">
    Total Peace of Mind
    </h2>
    <div>
      <p className="my-5">
      Never worry about your valuables again. Our advanced security systems and professional staff ensure your items are monitored, protected, and safe 24/7 so you can focus on living, not stressing.
      </p>
    </div>
    <button className="my-5 text-white flex items-center gap-2 p-2 bg-amber-500 rounded-md mx-auto lg:mx-0">
      learn more <HiArrowCircleRight />
    </button>
  </div>
  
  <div className="w-full lg:w-70 pt-5">
    <RiLockStarFill className="text-5xl text-green-700 mx-auto lg:mx-0"/>
    <h2 className="text-[min(4, 24px)] font-bold my-5 text-center lg:text-left">
    Seamless, Hassle-Free Experience
    </h2>
    <div>
      <p className="my-5">
      We make security simple. From item pickup to secure storage and retrieval, our streamlined process saves you time, energy, and worry all with exceptional customer care.
      </p>
    </div>
    <button className="my-5 text-white flex items-center gap-2 p-2 bg-amber-500 rounded-md mx-auto lg:mx-0">
      learn more <HiArrowCircleRight />
    </button>
  </div>
  
  <div className="w-full lg:w-70 pt-5">
    <BsBank2 className="text-6xl text-green-700 mx-auto lg:mx-0"/>
    <h2 className="text-[min(4, 24px)] font-bold my-5 text-center lg:text-left">
    Premium Protection You Can Trust
    </h2>
    <div>
      <p className="my-5">
      From cutting-edge vault technology to biometric access and surveillance, we deliver top-tier security. Whether personal or business-related, your valuables are in the safest hands possible.
      </p>
    </div>
    <button className="my-5 text-white flex items-center gap-2 p-2 bg-amber-500 rounded-md mx-auto lg:mx-0">
      learn more <HiArrowCircleRight />
    </button>
  </div>
</div>
      </div>
    </div>
  );
}
