import React from "react";
import { IoIosMail } from "react-icons/io";
export default function Support() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
        <div className="w-full max-w-md border border-gray-200 rounded-lg shadow-sm p-6 space-y-6 bg-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Contact our Customer Service
            </h2>
            <p className="text-gray-500 mt-1 text-[11px]">
              Please NOTE: reponse may take up to 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="user"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                UserName
              </label>
              <input
                placeholder="ken3241"
                type="text"
                id="user"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
                readOnly
              />
            </div>

            <div>
              <label
                htmlFor="prioperty"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Prioperty
              </label>
              <select
                placeholder="you@example.com"
                id="prioperty"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
              >
                <option>High</option>
                <option>Mid</option>
                <option>Low</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                placeholder="I cannot access my account"
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
            <div>
              <textarea className="border border-gray-300 w-full h-full"></textarea>
            </div>
          </div>

          <button className="cursor-pointer w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
            <span className="flex items-center gap-2">
              {" "}
              <IoIosMail className="text-lg" /> Send Message
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
