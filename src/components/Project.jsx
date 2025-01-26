import React, { useState } from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import { FaLink } from "react-icons/fa";


export default function Project() {
  return (
    <section id='project' className='w-screen h-[30rem] relative right-40 bg-white dark:bg-gray-900 py-12'>
        
        <div className='container mx-auto px-20'>
            <h2 className='text-3xl font-bold text-center mb-6 dark:text-white'>Projects</h2>
        </div>

        <div className='relative'>
          <div className='flex space-x-6 overflow-x-auto scrollbar-hide'>

            <div className='relative min-w-[280px] h-[200px] ms-28 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex-shrink-0'>
              <a href='https://figuringtocode.github.io/Netflix-UI-UX-clone/'><img src={project1} alt='n-flix' className='w-full h-full object-cover'></img></a>
            </div>
            
            <div className='relative min-w-[280px] h-[200px] bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex-shrink-0'>
              <a href='https://listentunewave.freewebhostmost.com/'><img src={project2} alt='tunewave' className='w-full h-full object-cover'></img></a>
            </div>
            
            <div className='relative min-w-[280px] h-[200px] ms-20 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex-shrink-0'>
              <a href='https://figuringtocode.github.io/TopCaar/'><img src={project3} alt='topcaar' className='w-full h-full object-cover'></img></a>
            </div>

          </div>

        </div>

    </section>
  )
}
