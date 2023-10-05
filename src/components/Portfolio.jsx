import React, { useState } from 'react';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import './Portfolio.css';
import Popup from './Popup';
import './Popup.css';
import butterAndCrust from '../assets/portfolio/commercial/butterAndCrust.png';
import wondrMedicalSite from '../assets/portfolio/commercial/wondrMedicalSite.png';
import wondrMedicalApp from '../assets/portfolio/commercial/wondrMedicalApp.png';
import vueTechTest from '../assets/portfolio/self/vueTechTest.png';
import brainsOnBrioche from '../assets/portfolio/self/brainsOnBrioche.png';
import chitterChallenge from '../assets/portfolio/self/chitterChallenge.png';
import bettah from '../assets/portfolio/self/bettah.png';

const Portfolio = () => {
  const [activePortfolioId, setActivePortfolioId] = useState(null);
  const [contentRef, isVisible] = useFadeInOnScroll();

  const commercialPortfolios = [
    {
      id: 1,
      title: 'Wondr Medical Site',
      src: wondrMedicalSite,
      href: 'https://wondrmedical.net/',
      summary: 'A communication and video-hosting web app for cardiology',
      repo: null,
      info: ['Building out new pages for Design UX requirements', 'Built with Responsive and Accessible first thinking', 'Unit testing all new features to increase overall coverage', 'Building out and altering existing serialized contracts to interact with our HATEOAS Application',],
      technologies: ['Ruby on Rails', 'JavaScript', 'HTML', 'CSS', 'MiniTest', 'Tailwind', 'MySQL', 'Redis', 'AWS']
    },
    {
      id: 2,
      title: 'Wondr Medical App',
      src: wondrMedicalApp,
      href: 'https://www.wondrmedical.com/download',
      repo: null,
      summary: 'An extension of the main Wondr site\'s messaging service',
      info: ['Built out an entire Replies feature independently', 'Integrated new screens utlizing third party packages and custom hooks which interfaced with the core RoR site contracts', 'Built and tested all new App builds with Expo, for both iOS and Android'],
      technologies: ['React Native', 'React Testing Library', 'Tailwind', 'Expo', 'Detox' ]
    },
    {
      id: 3,
      title: 'Butter and Crust',
      src: butterAndCrust,
      href: 'https://butterandcrust.com/',
      repo: null,
      summary: 'Worked as a freelance Shopify developer',
      info: ['Built out custom JavaScripts and CSS to improve user journeys', 'Ensured secure Theme Updates for client, and persisted and documented site-wide customisations', 'Manually Tested all changes to the site to ensure safe deployment to production', 'Consulted on the installation of third-party Apps and managed their integration and data-flows'],
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'jQuery']
    }
  ];

  const selfPortfolios = [
    {
      id: 11,
      title: 'Product Landing Page - Vue.js',
      src: vueTechTest,
      href: 'https://vue-hulla-ta-5r3pie.stackblitz.io/',
      repo: 'https://github.com/archiemartini/vue-hulla-ta-5r3pie',
      summary: 'A tech test which required I build a Product Landing Page for a Shoe company',
      info: ['A responsive grid for the list of products', 'Made with Accessibility focus, Sighted Keyboard User compatible', 'Screen reader compatible', 'Data was provided to me via JSON'],
      technologies: ['Vue.js', 'Tailwind']
    },
    {
      id: 12,
      title: 'Brains on Brioche',
      src: brainsOnBrioche,
      href: null,
      repo: 'https://github.com/archiemartini/brains-on-brioche',
      summary: 'A MERN stack application built as my final project at Makers bootcamp',
      info: ['takes user\'s fridge contents and searches via API for possible recipes they could make', 'state managed by Redux', 'user data stored on MongoDB'],
      technologies: ['React.js', 'Express', 'Node.js', 'MongoDB', 'Axios', 'Redux']
    },
    {
      id: 13,
      title: 'Chitter Challenge',
      src: chitterChallenge,
      href: 'https://prismatic-rolypoly-9f3eea.netlify.app',
      repo: 'https://github.com/archiemartini/chitter-challenge-react',
      summary: 'A twitter clone built ontop of Makers\' API',
      info: ['Utilizes MUI icons library'],
      technologies: ['React.js', 'Express', 'Axios']
    },
    {
      id: 14,
      title: 'Bettah',
      src: bettah,
      href: null,
      repo: 'https://github.com/archiemartini/acebook-allowTeamToReceiveName',
      summary: 'A facebook clone built with JavaScript and MongoDB',
      info: [],
      technologies: ['JavaScript', 'Express', 'Axios', 'Nodemon', 'Jest']
    },
  ];

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
      <div ref={contentRef} className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='text-1xl font-bold inline mb-4'>
          Commercial:
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-12'>
          {commercialPortfolios.map((portfolio) => (
            <div key={portfolio.id} 
                 className='h-100 w-auto shadow-md shadow-gray-600 rounded-lg' 
                 onClick={() => setActivePortfolioId(portfolio.id)}>
                <img src={portfolio.src} alt='' className='w-full h-48 rounded-md object-cover'/>
                <div className="sm:hidden text-center font-medium my-1">{portfolio.title}</div>
                <div className="overlay cursor-pointer">
                    <div className='text-1xl text-center font-medium'>{portfolio.title}</div>
                    <div className='text-sm text-white p-2 text-center'>{portfolio.summary}</div>
                </div>
                <Popup
                    trigger={activePortfolioId === portfolio.id} 
                    setTrigger={setActivePortfolioId}
                    portfolio={portfolio}
                />
            </div>
          ))}
        </div>

        <div className='text-1xl font-bold inline mb-4'>
          Personal Projects:
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12 pb-12'>
          {selfPortfolios.map((portfolio) => (
            <div key={portfolio.id} 
                 className='h-100 w-auto shadow-md shadow-gray-600 rounded-lg' 
                 onClick={() => setActivePortfolioId(portfolio.id)}>
                <img src={portfolio.src} alt='' className='w-full h-48 rounded-md object-cover'/>
                <div className="sm:hidden text-center font-medium my-2">{portfolio.title}</div>
                <div className="overlay cursor-pointer">
                    <div className='text-1xl text-center font-medium'>{portfolio.title}</div>
                    <div className='text-sm text-white p-2 text-center'>{portfolio.summary}</div>
                </div>
                <Popup
                    trigger={activePortfolioId === portfolio.id} 
                    setTrigger={setActivePortfolioId}
                    portfolio={portfolio}
                />
            </div> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
