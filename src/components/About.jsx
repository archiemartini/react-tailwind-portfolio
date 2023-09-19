import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
        People-oriented professional with a penchant for problem-solving. My experience shows a proven ability to manage priorities, meet deadlines, and produce deliverables. I possess hands-on expertise in debugging and enhancing large-scale Rails and React Native applications. I've been trained and practised in all aspects of AGILE methodology. I am an exceptionally fast learner, and I thrive in collaborative environments where I can leverage my strong communication skills to work effectively with cross-functional teams. With a passion for continuous self-development, I actively seek opportunities to stay updated with the latest industry trends and technologies.
        </p>
        <br />
        <p className='text-xl'>
          Yada yada yada...
        </p>
      </div>
    </div>
  )
}

export default About