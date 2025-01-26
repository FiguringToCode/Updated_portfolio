import React from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'
import '@fontsource/poppins/600.css'

 const Header = ({darkMode, setDarkMode}) => {
  return (
    <header className='bg-white z-20 dark:bg-gray-900 shadow-md py-7 px-[10rem] fixed top-0 left-0'>
        <div className='container flex items-center'>
            <h1 className='text-2xl font-bold text-purple-500 dark:text-purple-300 cursor-pointer'>FiguringToCode</h1>

            <nav className='px-6 ml-[35rem]'>
              <div className={darkMode ? 'dark' : ''}>
                <ul className='flex space-x-8 font-bold font-lg'>
                    <li><a href='#home' className='text-gray-700 dark:text-gray-300'></a>Home</li>
                    <li><a href='#about' className='text-gray-700 dark:text-gray-300'></a>About</li>
                    <li><a href='#skills' className='text-gray-700 dark:text-gray-300'></a>Skills</li>
                    <li><a href='#projects' className='text-gray-700 dark:text-gray-300'></a>Projects</li>
                    <li><a href='#contact' className='text-gray-700 dark:text-gray-300'></a>Contact</li>
                </ul>
              </div>
            </nav>

            <button onClick={() => {setDarkMode(!darkMode)}} className='text-2xl focus:outline-none transition duration-500 ease-in-out'>
              {darkMode ? <FaSun className='text-yellow-500' /> : <FaMoon className='text-gray-500' /> }
            </button>
        </div>
    </header>
  )
}

export default Header;