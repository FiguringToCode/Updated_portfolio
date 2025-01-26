import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-screen h-[8rem] relative right-40 bg-purple-600 dark:bg-purple-800 py-6">
      <div className="container mx-auto text-center text-white">
        <p>Create By Yash Jumde | All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/yashjumde/" className="hover:text-gray-300"><FaLinkedin /></a>
          <a href="https://github.com/FiguringToCode" className="hover:text-gray-300"><FaGithub /></a>
          <a href="" className="hover:text-gray-300"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  )
}
