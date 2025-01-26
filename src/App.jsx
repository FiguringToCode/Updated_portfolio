import React, { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Project from './components/Project'
import Skills from './components/Skills'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
      <div className={darkMode ? 'dark' : ''}>
        <Header className={darkMode ? 'dark' : ''} darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
  );
}

export default App
