import React from 'react'

export default function ForgetPassword() {
  return (
       <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md border border-gray-200 rounded-lg shadow-sm p-6 space-y-6 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Forgot Password</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              placeholder="Enter your account email"
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
          <p className="text-[12px] -mt-2">Password will be sent to your email</p>
 
    
         
        </div>
    
        <button
          className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
       
          <span>Recover</span>
        </button>
    
        
      </div>
    </div>
  )
}
