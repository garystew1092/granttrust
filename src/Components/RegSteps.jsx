import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { HiDocumentCheck } from "react-icons/hi2";
export default function RegSteps() {
  return (
    <div className='py-10 container'>
        <section className='flex  justify-between '>

            <div className='w-[400px] my-30'>
                <h1 className='text-3xl font-bold'>Our Journey: A Commitment to Community Support</h1>

                <button className='my-5 text-white flex items-center gap-2 p-2 bg-amber-500 rounded-md mx-auto lg:mx-0'>Learn More {">"}</button>

            </div>
            <div className="relative">
  {/* Vertical line that stops before the last item's content */}
  <div className="absolute left-13 lg:-left-3 top-0 h-[calc(100%-80px)] w-1 bg-green-300 md:left-1/2 md:-translate-x-1/2"></div>

  {/* Timeline items with proper spacing */}
  <div className="space-y-10 pl-20 md:pl-0">
    {/* Item 1 */}
    <div className="relative flex">
      {/* Icon positioned to the left of text */}
      <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 md:-left-8">
        <FaUserTie className="text-xl" />
      </div>
      {/* Content with proper margin */}
      <div className="w-full pl-4">
        <h2 className="text-lg font-bold text-green-800">Our Foundation</h2>
        <p className="mt-1 text-gray-600">
          Founded in 1990, we have been serving our community with dedication and compassion.
        </p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="relative flex">
      <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 md:-left-8">
        <FaUserTie className="text-xl" />
      </div>
      <div className="w-full pl-4">
        <h2 className="text-lg font-bold text-green-800">Key Milestones</h2>
        <p className="mt-1 text-gray-600">
          In 2005, we expanded our service to reach more families in need across the region.
        </p>
      </div>
    </div>

    {/* Item 3 */}
    <div className="relative flex">
      <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 md:-left-8">
        <HiDocumentCheck className="text-xl" />
      </div>
      <div className="w-full pl-4">
        <h2 className="text-lg font-bold text-green-800">Achievements</h2>
        <p className="mt-1 text-gray-600">
          Recognized in 2015 with the Community Excellence Award for our outreach programs.
        </p>
      </div>
    </div>

    {/* Item 4 - Last item without line extending below */}
    <div className="relative flex">
      <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 md:-left-8">
        <HiDocumentCheck className="text-xl" />
      </div>
      <div className="w-full pl-4">
        <h2 className="text-lg font-bold text-green-800">Future Goals</h2>
        <p className="mt-1 text-gray-600">
          Planning to establish 5 new distribution centers by 2025 to serve rural communities.
        </p>
      </div>
    </div>
  </div>
</div>


        </section>


    </div>
  )
}
