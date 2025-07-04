import React from 'react'
import Logo from '../assets/logo.png'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
<div className="bg-amber-500 min-h-[320px] mt-10 w-full">
  <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:h-[120px] p-4 lg:p-0">
    {/* Logo - centered on mobile, aligned left on desktop */}
    <img 
      src={Logo} 
      alt="Company Logo" 
      className="mb-6 lg:mb-0 lg:mr-10 w-auto h-12 lg:h-auto mt-10"
    />

    {/* Navigation - column on mobile, row on desktop */}
    <ul className="text-white text-xl flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-10 w-full lg:w-auto mt-20">
      <li><a href="">Home</a></li>
      <li><a href="">Open an account</a></li>
      <li><a href="">Sign in</a></li>
      <li><a href="">Learn More</a></li>
    </ul>

    {/* Copyright - at bottom on mobile, aligned right on desktop */}
    <div className="text-white mt-6 lg:mt-0 lg:ml-auto text-center lg:text-right w-full lg:w-auto">
      <p>© {currentYear} Grant Trust. All rights reserved.</p>
    </div>
  </div>
</div>
  )
}
