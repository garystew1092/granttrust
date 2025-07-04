import React from "react";
import { PiMoneyWavyFill } from "react-icons/pi";
import { BiTransfer } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
export default function HeroBottom() {
  return (
    <div className="container mt-10 p-10">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
        <div className="md:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-bold md:max-w-[500px]">
          Guardians of What Matters Most
          </h1>
        </div>
        <div className="md:w-1/2 lg:max-w-[600px]">
          <p className="text-base sm:text-lg">
          At <b className="text-amber-500">Grant Trust</b>, we don’t just protect possessions — we protect legacies, memories, and peace of mind. Whether it’s priceless heirlooms, confidential documents, or valuable assets, our mission is simple: to guard what matters most to you with unwavering dedication and cutting-edge security. With us, your items aren’t just stored — they’re shielded, monitored, and respected like they’re our own. Because when it comes to your peace of mind, second-best is never an option.
          </p>
        </div>
      </div>
      <div id="holder" className="mt-20 flex flex-col lg:flex-row justify-between">
        <div className="p-2">
        <PiMoneyWavyFill className="text-4xl text-green-500" />

          <div className="w-full my-5">
            <h2 className="text-[min(5vw,24px)] font-bold my-5">Looking to Cut Costs Without Cutting Corners? </h2>
            <p className="text-[20px] w-80">
            At <b className="text-amber-500">Grant Trust</b>, we believe in offering top-tier security that doesn’t break the bank. You don’t have to sacrifice quality for affordability. With our innovative security solutions, you can safeguard your valuable items without the high price tag. We provide cost-effective options tailored to your needs, ensuring that you receive the best protection, without compromising on service or security features. It's smart security for a smarter budget.
            </p>
          </div>
        </div>
        <div className="p-2" >
        <MdOutlineSecurity  className="text-4xl text-green-500"/>

          <div className="w-full my-5 ">
            <h2 className="text-[min(5vw,24px)] font-bold my-5">How Our Safe System Works</h2>
            <p className="text-[20px] w-80">
            Initial Consultation & Pickup
            We start by understanding your security needs. Whether you're storing documents, valuables, or high-value assets, we provide a tailored plan to ensure the right level of protection. Once everything is set, we securely pick up your items and transport them to our secure facility.
            </p>
          </div>
        </div>

        <div className="p-2">
        <BiTransfer className="text-4xl text-green-500"/>

          <div className="w-full my-5 ">
            <h2 className="text-[min(5vw,24px)] font-bold my-5">Effortless, On-Demand Item Transfer:</h2>
            <p className="text-[20px] w-80">
            At <b className="text-amber-500">Grant Trust</b>, we understand that your items are valuable, and so is your time. That's why we’ve made transferring your securely stored belongings as easy and flexible as possible. Whether you need access to important documents, rare collectibles, or any other valuable item, you can request a transfer whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
