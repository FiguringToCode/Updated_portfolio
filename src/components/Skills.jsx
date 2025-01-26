import React from 'react'
import skillImg from '../assets/asset 2.png'

export default function Skills() {

  const skills = [
    { name: 'HTML', level: 94 },
    { name: 'CSS', level: 84 },
    { name: 'JavaScript', level: 74 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Git & GitHub', level: 60 },
    { name: 'TailwindCss', level: 80 },
    { name: 'React', level: 78 },

  ]

  return (
    <section id='skills' className='bg-white px-[13rem] w-screen relative right-40  dark:bg-gray-900 py-20 flex'>

      <div className='container'>
        <h2 className='text-4xl font-bold ml-[33rem] mb-8 dark:text-purple-500'>Skills</h2>

        <div className='grid grid-cols-1 md:grid-cols-1 gap-[2rem] mr-[10rem]'>
          {
            skills.map((skill, index) => (
              <div key={index} className='w-full'>
                <h3 className='text-sm font-semibold dark:text-gray-300'>{skill.name}</h3>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                  <div className='bg-purple-600 dark:bg-purple-500 h-2 rounded-full' style={{width: `${skill.level}%` }} ></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <img src={skillImg} alt="developer-illustrations" className='w-1/2' style={{width:'35rem', height:'35rem'}} />

    </section>
  )
}
