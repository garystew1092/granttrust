import React, { useContext, useState } from "react";
import { FaUnlockAlt } from "react-icons/fa";
import { ValidateEmail } from "../Utils/basic";
import { FaSpinner } from "react-icons/fa";
import { API_PATHS } from "../Utils/apiPaths";
import {  useNavigate } from 'react-router-dom';
import axiosInstance from "../Utils/axiosInstance";
import { UserContext } from "../Context/userContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Spinner() {
  return <FaSpinner className="spinner" />;
}

export default function LoginForm({ onForgotClick }) {
   const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");
  const {updateUser}= useContext(UserContext)
  
  const handleLogin = async (event) => {
  event.preventDefault();
  setIsLoading(true);
  setError("");

  try {
    const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
      email,
      password,
    });

    const { token, role } = response.data;
    if (!token) throw new Error("No authentication token received");

    // Store token and set headers
    localStorage.setItem("token", token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Force full reload to properly initialize all context
    window.location.href = role === "admin" ? '/admin/dashboard' : '/user/dashboard';

  } catch (error) {
    const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
    setError(errorMessage);
    toast.error(errorMessage);
  } finally {
    setIsLoading(false);
  }
};
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md border border-gray-200 rounded-lg shadow-sm p-6 space-y-6 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Account Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                placeholder="Enter your account email"
                type="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* <div>
              <label
                htmlFor="accessCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Access Code
              </label>
              <input
                placeholder="NOTE only admin"
                type="password"
                value={accessCode}
                onChange={({ target }) => setAccessCode(target.value)}
                id="accessCode"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
              />
            </div> */}
          </div>

         <button 
  className={`w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 ${
    isLoading ? "opacity-70 cursor-not-allowed" : ""
  }`}
  disabled={isLoading}
>
  <FaUnlockAlt className="text-lg" />
  <span>
    {isLoading ? (
      <>
        <Spinner />
        Processing...
      </>
    ) : (
      "Sign In"
    )}
  </span>
</button>
        </form>

        <div className="text-center text-sm text-gray-500">
          <a
            href="#"
            className="text-amber-600 hover:underline"
            onClick={onForgotClick}
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
