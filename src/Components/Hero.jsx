import React from 'react'
import Pic1 from '../assets/safe2.webp'
export default function Hero() {
  return (
    <div>

    <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 p-4 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Safe Today, Secure Tomorrow We Guard What Matters Most
        </h1>
        
        <p className="mt-5 text-lg text-gray-600">
        At <b className='text-amber-500'>Grant Trust</b>, security isn’t just a service .it’s our promise. Whether it’s priceless heirlooms, sensitive documents, or high-value assets, we combine cutting-edge technology with trusted protocols to keep your valuables out of harm’s way. With round-the-clock monitoring, tamper-proof systems, and discreet professionalism, we deliver more than protection .we deliver peace of mind. Your safety starts the moment your item is in our hands.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold text-xl mb-2">Unmatched Protection with Cutting-Edge Technology</h2>
            <p className="text-gray-600">
            We use state-of-the-art security systems — including 24/7 surveillance, biometric access controls, motion detectors, and tamper-proof vaults — to ensure your items are guarded against theft, damage, or loss. Your valuables deserve more than a lock and key — they deserve elite protection.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold text-xl mb-2"> Confidentiality and Peace of Mind</h2>
            <p className="text-gray-600">
              Access a variety of healthy food items without breaking the bank.
            </p>Our team is trained to handle every item with absolute discretion and care. Whether it’s personal, professional, or highly sensitive, you can trust that your belongings are stored securely and privately. No stress, no worries — just total peace of mind.
          </div>
        </div>
      </div>
  
      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src={Pic1} 
          alt="Food bank savings" 
          className="rounded-full w-full max-w-md md:max-w-lg lg:max-w-xl aspect-square object-cover shadow-2xl"
        />
      </div>
    </div>
  </div>

    </div>
  )
}
