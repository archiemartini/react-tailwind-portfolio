import React from 'react';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import html from '../assets/experience/html.png';
import css from '../assets/experience/css.png';
import javascript from '../assets/experience/javascript.png';
import ruby from '../assets/experience/ruby.webp';
import reactImage from '../assets/experience/react.png';
import rails from '../assets/experience/rails.png';
import vueJS from '../assets/experience/vueJS.png';
import github from '../assets/experience/github.png';
import tailwind from '../assets/experience/tailwind.png';
import mysql from '../assets/experience/mysql.png'
import typeScript from '../assets/experience/typeScript.png'
import aws from '../assets/experience/aws.png'
import redis from '../assets/experience/redis.png'
import rspec from '../assets/experience/rspec.png'
import jest from '../assets/experience/jest.png'
import postgres from '../assets/experience/postgres.png'
import mongo from '../assets/experience/mongo.png'
import expo from '../assets/experience/expo.png'
import redux from '../assets/experience/redux.png'
import shopify from '../assets/experience/shopify.png'
import liquid from '../assets/experience/liquid.png'
import jQuery from '../assets/experience/jQuery.png'
import terraform from '../assets/experience/terraform.png'
import docker from '../assets/experience/docker.png'
import figma from '../assets/experience/figma.png'
import firebase from '../assets/experience/firebase.png'
import cypress from '../assets/experience/cypress.png'

const Experience = () => {
  const [contentRef, isVisible] = useFadeInOnScroll();

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
    {
      id: 25,
      src: figma,
      title: 'Figma',
      style: 'shadow-sky-500'
    },
    {
      id: 26,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-yellow-400'
    },
    {
      id: 27,
      src: cypress,
      title: 'Cypress',
      style: 'shadow-white'
    },
  ]

  return (
    <div name='experience' className='pt-12 bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
      <div ref={contentRef} className={`max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full flex flex-wrap text-center py-8 px-12 sm:px-0'>
          {
            technologies.map(({id, src, title, style}) => (
              <div key={id} className={'shadow-md hover:scale-105 duration-500 m-1 sm:m-2 px-4 sm:px-6 py-2 sm:py-2 rounded-lg ' + style}>
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

export default Experience;