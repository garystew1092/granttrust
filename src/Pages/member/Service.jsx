import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import VaultPic from '../../assets/vault_jew.jpeg'
import CarPark from '../../assets/car_stored.jpg'

export default function Service() {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-grow p-4 md:p-8 container mx-auto text-[#6E798A] text-[14px]">
        {/* Who We Are Section */}
        <div className="mb-10">
          <h5 className="font-bold text-[20px] text-[#6E798A] mb-2">Who we Are</h5>
          <p className="leading-8 text-[13px] lg:w-1/2">
            At <span className='font-bold text-orange-400'>Grant trust</span>, we understand that your valuables are irreplaceable. Whether it's important documents, precious jewelry, cash, vehicles, or other high-value assets, our state-of-the-art storage facilities provide the ultimate protection. With 24/7 surveillance, biometric access, and military-grade security, your belongings are safer with us than anywhere else.
          </p>
        </div>

        {/* Services Section with Image */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          {/* Services List */}
          <div className="lg:w-1/2">
            <h5 className="font-bold text-[20px] text-[#6E798A] mb-5">Our Storage Solutions</h5>
            
            <div className="space-y-6">
              <div>
                <h6 className='text-xl mb-1 font-semibold text-[#444]'>1. Document & Cash Storage</h6>
                <ul className='list-disc pl-5 mb-5 space-y-1'>
                  <li>Safeguard wills, deeds, passports, certificates, and sensitive financial records.</li>
                  <li>Fireproof, waterproof, and tamper-proof vaults.</li>
                  <li>Private, discreet access for authorized individuals only.</li>
                </ul>
              </div>

              <div>
                <h6 className='text-xl mb-1 font-semibold text-[#444]'>2. Jewelry & Precious Items Storage</h6>
                <ul className='list-disc pl-5 mb-5 space-y-1'>
                  <li>Climate-controlled units to preserve diamonds, gold, art, and heirlooms.</li>
                  <li>Individually secured compartments with private access.</li>
                  <li>Insurance-backed protection for added peace of mind.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image - Right side on desktop, full width on mobile */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <img 
              src={VaultPic} 
              alt="Secure vault for valuables" 
              className='w-full h-auto rounded-lg shadow-lg object-cover max-h-[400px]'
            />
          </div>
        </div>

        {/* Second Row - Bottom Services and Image (if you want alternating layout) */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          {/* Image - Left side on desktop */}
          <div className="lg:w-1/2 order-2 lg:order-1 flex items-center justify-center">
            <img src={CarPark}/>
          </div>
          
          {/* Services List */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <h6 className='text-xl mb-1 font-semibold text-[#444]'>3. Vehicle & Large Asset Storage</h6>
                <ul className='list-disc pl-5 mb-5 space-y-1'>
                  <li>Secure garaging for luxury cars, motorcycles, and collectible vehicles.</li>
                  <li>Dust-free, temperature-regulated environments.</li>
                  <li>Optional maintenance services to keep vehicles in pristine condition.</li>
                </ul>
              </div>

              <div>
                <h6 className='text-xl mb-1 font-semibold text-[#444]'>4. High-Value Asset Storage</h6>
                <ul className='list-disc pl-5 mb-5 space-y-1'>
                  <li>Custom solutions for rare collectibles, fine art, antiques, and more.</li>
                  <li>Discreet handling and transport services available.</li>
                  <li>Advanced security protocols to prevent theft or damage.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className='text-2xl font-bold mb-4 text-[#444]'>Why Choose Grant Trust?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className='space-y-2'>
              <li className='flex items-start'>
                <span className="mr-2 text-green-600">✔</span>
                <span>Military-Grade Security – Armed guards, motion sensors, and 24/7 monitoring.</span>
              </li>
              <li className='flex items-start'>
                <span className="mr-2 text-green-600">✔</span>
                <span>Biometric & Multi-Factor Access – Only you and authorized personnel can retrieve your items.</span>
              </li>
              <li className='flex items-start'>
                <span className="mr-2 text-green-600">✔</span>
                <span>Fully Insured Storage – Comprehensive coverage for all stored valuables.</span>
              </li>
              <li className='flex items-start'>
                <span className="mr-2 text-green-600">✔</span>
                <span>Private & Confidential – Discreet service with no public records of stored items.</span>
              </li>
            </ul>
            
            <ul className='space-y-2'>
              <li className='flex items-start'>
                <span className="mr-2 text-green-600">✔</span>
                <span>Flexible Access – Schedule retrievals anytime, day or night.</span>
              </li>
              <li className='flex items-start'>
                <span className="mr-2 text-green-600">✔</span>
                <span>Climate-Controlled Units – Protects against environmental damage.</span>
              </li>
              <li className='flex items-start'>
                <span className="mr-2 text-green-600">✔</span>
                <span>Custom Solutions – Tailored storage options to fit your unique needs.</span>
              </li>
              <li className='flex items-start'>
                <span className="mr-2 text-green-600">✔</span>
                <span>Expert Staff – Trained professionals to assist with all storage needs.</span>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <Footer />
    </section>
  )
}