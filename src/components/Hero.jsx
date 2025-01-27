import React from 'react'
import DevImg from '../assets/asset_0.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (

    <section id='home' className='bg-white dark:bg-gray-900 w-screen relative right-40 py-20 px-20'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>

        <div className='flex flex-col justify-center p-16 mt-4 text-2xl'>
          <a href='https://www.linkedin.com/in/yashjumde/' className='text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4'><FaLinkedin /></a>
          <a href='https://github.com/FiguringToCode' className='text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4'><FaGithub /></a>
          <a href='' className='text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4'><FaWhatsapp /></a>
        </div>

        <div className='text-left'>
          <h1 className='text-5xl font-bond text-gray-900 dark:text-white'>
            Hello, I'm <br/>
            <span className='text-purple-600 dark:text-purple-400'>Yash Jumde</span>
          </h1>
          <h2 className='text-2xl font-semibold mt-2 text-gray-800 dark:text-gray-300'>Frontend Developer</h2>
          <p className='mt-4 text-gray-600 dark:text-gray-400'>I Design Web Application for fun and If you want to make website, Contact me.</p>
          <button className='mt-6 px-6 py-2 bg-purple-500 rounded text-white hover:bg-purple-700 dark:bg-purple-300 dark:hover:bg-purple-600'>Contact Me</button>
        </div>
        <img src={DevImg} alt='Developer Illustration' className='w-1/2' />
      </div>
    </section>

  )
}
