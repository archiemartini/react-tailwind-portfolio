import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Fullstack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
          A Ruby on Rails, Node.js, React/React Native developer, with nine months of intensive commercial experience at a dynamic start-up.

          I'm looking to continue in my capacity as a Fullstack Developer
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={20} className='ml-1 mb-0.5'/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my visage" className='rounded-2xl mx-auto md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home