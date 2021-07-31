import React from 'react'

const SystemFeature = () => {
  return (
    <div className="py-28">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-2 text-gray-900">Our system creates the perfect environment for the plants to grow
    </h1>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./features/seedling/temperature.jpg"/>
        </div>
    </div>
    <div className="p-4 mt-6 md:w-1/3 sm:mb-0 mb-6"> 
          <h3>•Temperature controlled</h3><h3> •Right mix of nutrients </h3><h3>•Online Support from our Team</h3>
    </div>
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
    <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./features/seedling/temperature2.jpg"/>
        </div>
   
    
    </div>
    </div>
    </div>
  )
}

export default SystemFeature
