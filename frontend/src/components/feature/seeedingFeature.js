import React from 'react'

const SeedingFeature = () => {
  return (
      <div className="py-28">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Seedling Production
      
</h1>
</div>  
<div className="flex flex-wrap -mx-4 mb-20 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-100 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./features/seedling/seedling.jpg"/>
        </div>
       
        <p className="mt-6 mb-3 leading-relaxed text-base">5 Kinds of Lettuce</p>
       
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-100 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./features/seedling/seedling2.jpg"/>
        </div>
        
        <p className="mt-6 mb-3 leading-relaxed text-base">Strawberry Runner Production</p>
        
      </div>
    </div>
   
   
   
  </div>

  )
}

export default SeedingFeature
