import React, { Fragment } from 'react'
import AboutTop from '../components/about/aboutUStop'
import AboutMid from '../components/about/aboutUsMid'
import AboutBot from '../components/about/aboutUsBot'


const About = () => {
    
    return (

            <Fragment>
            
            <div className="text-center text-gray-600">
            <div className="flex justify-center py-10">
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4 md:w-40"></span>
                    <h1 className="text-3xl text-center font-bold mx-6 md:text-6xl md:pt-0">ABOUT US</h1>
                    <span className="inline-block h-1 w-20 rounded bg-green-500 mt-6 mb-4 md:w-40"></span>
                </div>
            <section className="text-gray-600 body-font relative">
               
                </section>
                 
                <AboutTop/>
                 <AboutMid/>  
                <AboutBot/>   

                
            </div>
      
           
          
         </Fragment>
    )
}

export default About
