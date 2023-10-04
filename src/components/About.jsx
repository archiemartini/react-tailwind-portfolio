import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
        Coming from a previous life as a humanities student and a career in the editorial world, I'm a full-stack developer looking to continue the 9 months of stellar work I've put in at my first company, Wondr Medical. During my time at Wondr I became adept at debugging large-scale applications, grokking legacy code, and contributing to a cross-functional team.
        
        
        </p>
        <br />
        <p className='text-xl'>
        Company wide redundancies put my position (and 80% of staff) at risk, but before now I was excelling in my role as Junior Developer, seeing dozens of PRs deployed into production in my first few months. Working across a Ruby on Rails website and a React Native mobile application, I proved myself an efficient and dependable developer. I sat in the support team, regularly fixing high priority bugs, on weekly basis, in quick turn around. I'm well instructed with all facets of the AGILE development work-flow and CI/CD processes. I'm a Github master, having been empowered to make deployments directly to production, it was imperative and a matter of SOC2/HIPAA compliance that I ensured each piece of code was tracked down and properly approved.
        </p>
        <br />
        <p className='text-xl'>
        I received commendations from all departments on my excellent communication skills and proactive approach. For Design, it was my dedication to returning their designs on the frontend and my understanding of UI/UX design. For Product, it was my ability in communicating complex problems and risks in implementing new features. For Data, I worked closely with the team to find solutions to better improve our company's use and collection of data.
        </p>
        <br />
        <p className='text-xl'>
        Currently, I'm passionate about Web Accessibility and looking for a role that will help me progress in this area. In the interim, I'm working as a freelance Shopify developer whilst also expanding my current skills mentioned here and other areas such as Cloud Computing and DevOps.
        </p>
      </div>
    </div>
  )
}

export default About