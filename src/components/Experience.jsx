import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import ruby from '../assets/ruby.webp';
import reactImage from '../assets/react.png';
import rails from '../assets/rails.png';
import vueJS from '../assets/vueJS.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import mysql from '../assets/mysql.png'
import typeScript from '../assets/typeScript.png'
import aws from '../assets/aws.png'

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: ruby,
      title: 'Ruby',
      style: 'shadow-red-500'
    },
    {
      id: 5,
      src: reactImage,
      title: 'React',
      style: 'shadow-cyan-400'
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 7,
      src: rails,
      title: 'Ruby/Rails',
      style: 'shadow-red-500'
    },
    {
      id: 8,
      src: vueJS,
      title: 'Vue.js',
      style: 'shadow-green-200'
    },
    {
      id: 9,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id: 10,
      src: mysql,
      title: 'MySQL',
      style: 'shadow-cyan-600'
    },
    {
      id: 11,
      src: typeScript,
      title: 'TypeScript',
      style: 'shadow-blue-400'
    },
    {
      id: 12,
      src: aws,
      title: 'AWS',
      style: 'shadow-white'
    },
  ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full flex flex-wrap text-center py-8 px-12 sm:px-0'>
          {
            technologies.map(({id, src, title, style}) => (
              <div key={id} className={'shadow-md hover:scale-105 duration-500 m-2 px-6 py-2 rounded-lg ' + style}>
                <img src={src} alt='' className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience