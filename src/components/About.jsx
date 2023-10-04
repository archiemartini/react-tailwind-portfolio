import React from 'react';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';


const About = () => {
  const [contentRef, isVisible] = useFadeInOnScroll();

  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div
        ref={contentRef}
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <div>
          <p className='text-xl mt-20'>
            Humanities student turned full-stack developer, I'm looking to continue the 9 months of stellar work I've put in at my first company, Wondr Medical. During my time at Wondr I became adept at debugging large-scale applications, grokking legacy code, and contributing to a cross-functional team. Now I'm looking for a new role, and my next challenge.
          </p>
          <br />
          <p className='text-xl'>
            Company wide redundancies put my position (and 80% of staff) at risk. Before now, I was excelling in my role as Junior Developer. I saw dozens of PRs deployed into production in my first few months. Working across a Ruby on Rails website and a React Native mobile application, I proved myself an efficient and dependable full-stack developer. I sat in the support team, regularly fixing high priority bugs, on a weekly basis, in quick turnaround. I also singlehandedly built out a replies feature that ran through both applications. My experience has made me completely comfortable with all facets of the AGILE development workflow and CI/CD processes.
          </p>
          <br />
          <p className='text-xl'>
            Currently, I'm passionate about Web Accessibility and looking for a role that will help me progress in this area. In the interim, I'm working as a freelance Shopify developer whilst also expanding my current skills mentioned here and other areas such as Cloud Computing and DevOps.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
