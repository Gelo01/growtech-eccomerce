import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer nav-bg  relative pt-1 border-b-2 border-blue-700">
                <div className="container mx-auto px-6 text-center lg:text-left">

                    <div className="sm:flex sm:mt-8 md:flex-col">
                        <div className="flex flex-wrap overflow-hidden">
                            <div className=" my-3 w-full overflow-hidden md:w-1/2 lg:w-1/3">
                             <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
                            href="#pablo"
                            >
                            <Link to="/">
                            <img src="/images/GrowTechFarms.svg" alt="logo"
                            width="300"
                            height="200" />
                        </Link>
            </a>
                                <p className="">GrowTech Farms - Neopolitan Business Park, Lot 11 Block 2, Novaliches, Quezon City, Metro Manila </p>
                            </div>


                            <div className="flex flex-col my-3 px-2 w-full overflow-hiddenw-full overflow-hidden md:w-1/2 lg:w-1/3">
                                <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Follow us</span>
                                <span className="my-2"><Link to="#" className="text-gray-700 text-md hover:text-blue-500">Instagram</Link></span>
                                <span className="my-2"><Link to="#" className="text-gray-700  text-md hover:text-blue-500">Facebook</Link></span>
                                <span className="my-2"><Link href="#" className="text-gray-700 text-md hover:text-blue-500">Twitter</Link></span>
                            </div>
                            <div className="flex flex-col my-5 px-2 w-full overflow-hiddenw-full overflow-hidden md:w-1/2 lg:w-1/3">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        
            <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-green-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
         
          <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
       
        <p class="text-gray-500 text-sm mt-2 md:text-left text-center">To get some updates on our latest products</p>
        
          </div>
                           
                        </div>
                        
                        
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-sm text-blue-700 font-bold">
                                © 2020 by Pavlove BIOKOU
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer
