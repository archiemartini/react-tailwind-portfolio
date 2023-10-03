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
import redis from '../assets/redis.png'
import rspec from '../assets/rspec.png'
import jest from '../assets/jest.png'
import postgres from '../assets/postgres.png'
import mongo from '../assets/mongo.png'
import expo from '../assets/expo.png'
import redux from '../assets/redux.png'
import shopify from '../assets/shopify.png'
import liquid from '../assets/liquid.png'
import jQuery from '../assets/jQuery.png'
import terraform from '../assets/terraform.png'
import docker from '../assets/docker.png'

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
      src: rails,
      title: 'Ruby/Rails',
      style: 'shadow-red-600'
    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-cyan-500'
    },
    {
      id: 8,
      src: vueJS,
      title: 'Vue.js',
      style: 'shadow-emerald-300 pt-5'
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
      style: 'shadow-sky-800'
    },
    {
      id: 11,
      src: typeScript,
      title: 'TypeScript',
      style: 'shadow-sky-500'
    },
    {
      id: 12,
      src: aws,
      title: 'AWS',
      style: 'shadow-white'
    },
    {
      id: 13,
      src: redis,
      title: 'Redis',
      style: 'shadow-red-500'
    },
    {
      id: 14,
      src: rspec,
      title: 'Rspec',
      style: 'shadow-cyan-400'
    },
    {
      id: 15,
      src: jest,
      title: 'Jest',
      style: 'shadow-red-800'
    },
    {
      id: 16,
      src: postgres,
      title: 'PostgreSQL',
      style: 'shadow-sky-800'
    },
    {
      id: 17,
      src: mongo,
      title: 'MongoDB',
      style: 'shadow-lime-600'
    },
    {
      id: 18,
      src: expo,
      title: 'Expo',
      style: 'shadow-white'
    },
    {
      id: 19,
      src: redux,
      title: 'Redux',
      style: 'shadow-violet-800'
    },
    {
      id: 20,
      src: shopify,
      title: 'Shopify',
      style: 'shadow-lime-400'
    },
    {
      id: 21,
      src: liquid,
      title: 'Liquid',
      style: 'shadow-blue-800'
    },
    {
      id: 22,
      src: jQuery,
      title: 'jQuery',
      style: 'shadow-blue-600'
    },
    {
      id: 23,
      src: terraform,
      title: 'Terraform',
      style: 'shadow-indigo-700'
    },
    {
      id: 24,
      src: docker,
      title: 'Docker',
      style: 'shadow-sky-500'
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