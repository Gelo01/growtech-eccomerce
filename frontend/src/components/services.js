import React, { Fragment } from 'react'
import ServicesTop from "../components/services/services";
import ServicesButtom from './services/servicesbuttom';

const Services = () => {
    
    return (

            <Fragment>
            
            <div className="text-center text-gray-600">
            <div className="flex justify-center py-10">
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4 md:w-40"></span>
                    <h1 className="text-3xl text-center font-bold mx-6 md:text-6xl md:pt-0">OUR  SERVICES</h1>
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4 md:w-40"></span>
                </div>
            <section className="text-gray-600 body-font relative">
            <div className="text-center py-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 py-5 font-bold text-gray-900 lg:text-center">Services We Provide</h1>
                    <p className="mb-8">From sending you planting supplies, and home equipment to large-scale farm building consultancy, we can help!</p>
                    </div>
                <div className="container mx-auto ">
                    <ServicesTop/>
                    <ServicesButtom/>
                    </div>
                </section>


                
            </div>
      
           
          
         </Fragment>
    )
}

export default Services
