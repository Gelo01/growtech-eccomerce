import React from 'react'

const TopFeatures = () => {
  return (
      
    <div className="mx-auto">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 py-5 font-bold text-gray-900 lg:text-center">This is where our lettuce happily grows</h1>
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 mb-10   mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
        </div>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504"/>
        </div>
      
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505"/>
        </div>
        
      </div>
    </div>
    </div>
  
  
  )
}

export default TopFeatures
