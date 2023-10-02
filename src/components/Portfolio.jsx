import React, { useState } from 'react'
import Popup from './Popup'
import './Popup.css'
import butterAndCrust from '../assets/portfolio/commercial/butterAndCrust.png'
import wondrMedicalSite from '../assets/portfolio/commercial/wondrMedicalSite.png'
import wondrMedicalApp from '../assets/portfolio/commercial/wondrMedicalApp.png'
import vueTechTest from '../assets/portfolio/self/vueTechTest.png'
import brainsOnBrioche from '../assets/portfolio/self/brainsOnBrioche.png'
import chitterChallenge from '../assets/portfolio/self/chitterChallenge.png'

const Portfolio = () => {
  const [activePortfolioId, setActivePortfolioId] = useState(null);
  
  const commercialPortfolios = [
    {
      id: 1,
      title: 'Wondr Medical Site',
      src: wondrMedicalSite,
      href: 'https://wondrmedical.net/',
      summary: 'A communication and video-hosting web app for cardiology',
      repo: null,
      info: ['- Building out new pages for Design UX equirements', '- Unit testing all new features to increase overall coverage'],
      technologies: ['Ruby on Rails', 'JavaScript', 'HTML', 'CSS', 'MiniTest', 'Tailwind', 'MySQL', 'Redis', 'AWS' ]
    },
    {
      id: 2,
      title: 'Wondr Medical App',
      src: wondrMedicalApp,
      href: 'https://www.wondrmedical.com/download',
      repo: null,
      summary: '',
      info: [''],
      technologies: ['React Native', 'React Testing Library', 'Tailwind', 'Expo', 'Detox' ]
    },
    {
      id: 3,
      title: 'Butter and Crust',
      src: butterAndCrust,
      href: 'https://butterandcrust.com/',
      repo: null,
      summary: '',
      info: [''],
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'jQuery']
    }
  ]

  const selfPortfolios = [
    {
      id: 11,
      title: 'Product Landing Page - Vue.js',
      src: vueTechTest,
      href: 'https://vue-hulla-ta-5r3pie.stackblitz.io/',
      repo: 'https://github.com/archiemartini/vue-hulla-ta-5r3pie',
      summary: 'A tech test which required I build a Product Landing Page for a Shoe company',
      info: ['- A responsive grid for the list of products'],
      technologies: ['Vue.js', 'Tailwind']
    },
    {
      id: 12,
      title: 'Brains on Brioche',
      src: brainsOnBrioche,
      href: null,
      repo: 'https://github.com/archiemartini/brains-on-brioche',
      summary: 'A MERN stack application built as my final project at Makers bootcamp',
      info: ['- takes user\'s fridge contents and searches via API for possible recipes they could make', '- state managed by Redux', '- user data stored via MongoDB'],
      technologies: ['React.js', 'Express', 'Node.js', 'MongoDB', 'Axios', 'Redux']
    },
    {
      id: 13,
      title: 'Chitter Challenge',
      src: chitterChallenge,
      href: 'https://prismatic-rolypoly-9f3eea.netlify.app',
      repo: 'https://github.com/archiemartini/chitter-challenge-react',
      summary: 'A twitter clone built ontop of Makers\' API',
      info: ['- utlizes MUI icons library'],
      technologies: ['React.js', 'Express', 'Axios']
    }
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full z-0'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='text-1xl font-bold inline mb-4'>
          Commercial:
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-12'>
        {
          commercialPortfolios.map(({id, title, src, href, repo, summary, info, technologies}) => (
            <div key={id} className='h-100 w-auto shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt=''  onClick={() => setActivePortfolioId(id)} className='rounded-md object-cover w-full h-full duration-200 hover:scale-105 cursor-pointer'/>
               <div className='pt-2 text-center'>{title}</div>
                <Popup
                  trigger={activePortfolioId === id} 
                  setTrigger={setActivePortfolioId}
                  title={title}
                  imageSrc={src}
                  href={href}
                  repo={repo}
                  summary={summary}
                  info={info}
                  technologies={technologies}
                />
              </div>
          ))
        }
        </div>

        <div className='text-1xl font-bold inline mb-4'>
          Personal Projects:
        </div>
      
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12 pb-12'>
        {
          selfPortfolios.map(({id, title, src, href, repo, summary, info, technologies}) => (
              <div key={id} className='h-100 w-auto shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt=''  onClick={() => setActivePortfolioId(id)} className='rounded-md object-cover w-full h-full duration-200 hover:scale-105 cursor-pointer'/>
                <div className='text-center'>{title}</div>
                <Popup
                  trigger={activePortfolioId === id} 
                  setTrigger={setActivePortfolioId}
                  title={title}
                  imageSrc={src}
                  href={href}
                  summary={summary}
                  repo={repo}
                  info={info}
                  technologies={technologies}
                />
              </div>
          ))
        }
        </div>

      </div>
    </div>
  )
}

export default Portfolio