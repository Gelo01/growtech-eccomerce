import React from 'react'

const TopFeatures = () => {
  return (
      
    <div className="mx-auto">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 py-5 font-bold text-gray-900 lg:text-center">This is where our lettuce happily grows</h1>
      <div className="rounded-lg h-100 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="./features/top/house.jpg"/>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 mb-10   mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./features/top/hapilygrow.jpg"/>
        </div>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./features/top/tent.jpg"/>
        </div>
      
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./features/top/seedlings.jpeg"/>
        </div>
        
      </div>
    </div>
    </div>
  
  
  )
}

export default TopFeatures
