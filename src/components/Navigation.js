import React from 'react'
import { Link } from 'react-router-dom'



function Navigation(){
    return(
        <div class="">
            <ul  class="list-reset md:flex sm:flex">
                <li class="mr-6">
                    <Link 
                        to="/" 
                        class ="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                    >
                        Home
                    </Link>
                </li>
                <li class="mr-6">
                    <Link 
                        to="/mybio" 
                        class ="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                    >
                        CV
                    </Link>
                </li>
                <li class="mr-6">
                    <Link 
                        to="/calendar" 
                        class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                    >
                        Calendar
                    </Link>
                </li>
            </ul>
        </div>
    );
        
}
export default Navigation;