import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { MdEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp, IoHome } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";
import sideImg from "../../assets/contact-img.png";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <div
        id="mainContent"
        className="container py-10 mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="p-5">
          <h1 className="my-3 text-3xl text-gray-600 font-bold">Contact</h1>

          <div id="text">
            <p className="lg:w-1/2 text-sm my-12 text-gray-500">
              Connect with Vivera Ecosystem to experience seamless
              communication. We value open dialogue and are eager to engage with
              you. Whether you have questions, ideas, or feedback, we are here
              to listen and respond.
            </p>
          </div>

          <div className="lg:flex lg:gap-8 relative">
            {/* Left Side - Image and Details */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div id="dropBack"></div>
              <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg">
                <img
                  src={sideImg}
                  alt="Vivera Ecosystem"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div
                id="details"
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
              >
                {/* Office Hours */}
                <div className="text-[#676C7D] flex items-start gap-4">
                  <FaClock
                    className="mt-1 flex-shrink-0"
                    style={{ color: "#676C7D", fontSize: "18px" }}
                  />
                  <div>
                    <h6 className="text-[#676C7D] font-bold text-lg">
                      Office Hours
                    </h6>
                    <p>Monday-Friday</p>
                    <p>8:00 am to 5:00pm</p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="text-[#676C7D] flex items-start gap-4">
                  <IoHome
                    className="mt-1 flex-shrink-0"
                    style={{ color: "#676C7D", fontSize: "18px" }}
                  />
                  <div>
                    <h6 className="text-[#676C7D] font-bold text-sm">Office</h6>
                    <p>United State Emirate</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="text-[#676C7D] flex items-start gap-4">
                  <IoLocation
                    className="mt-1 flex-shrink-0"
                    style={{ color: "#676C7D", fontSize: "18px" }}
                  />
                  <div>
                    <h6 className="text-[#676C7D]">Email Address</h6>
                    <p className="text-[#754FFE] font-semibold flex items-center gap-2">
                      <FaEnvelope /> info@granttrust.org
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="text-[#676C7D] flex items-start gap-4">
                  <BsTelephoneFill
                    className="mt-1 flex-shrink-0"
                    style={{ color: "#754FFE", fontSize: "18px" }}
                  />
                  <div>
                    <p>Get In Touch</p>
                    <p className="text-[#754FFE]">+971 368 9280</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-1/2 lg:pl-0">
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 border rounded-md bg-[#f8f7ff] w-full text-sm border-blue-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3 border rounded-md bg-[#f8f7ff] w-full text-sm border-blue-300"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 border rounded-md bg-[#f8f7ff] w-full text-sm border-blue-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="p-3 border rounded-md bg-[#f8f7ff] w-full text-sm border-blue-300"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    className="p-3 border rounded-md bg-[#f8f7ff] w-full text-sm border-blue-300"
                  />
                </div>

                <div>
                  <textarea
                    className="border rounded-md bg-[#f8f7ff] w-full h-40 md:h-48 p-4 text-sm border-blue-300"
                    placeholder="Comment"
                  />
                </div>

                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="dataConsent"
                      className="w-4 h-4"
                    />
                    <label
                      htmlFor="dataConsent"
                      className="text-gray-600 text-sm"
                    >
                      I agree that my submitted data is being collected and
                      stored.
                    </label>
                  </div>

                  <div className="mt-6 h-5 ">
                    <button className="p-2 h-10 w-30 cursor-pointer font-semibold rounded-sm border text-white bg-gradient-to-r from-green-700 via-lime-500 to-orange-400">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
