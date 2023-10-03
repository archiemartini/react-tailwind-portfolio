import React from 'react'

const Popup = ({trigger, setTrigger, portfolio}) => {
  const { title, src, href, repo, summary, info, technologies } = portfolio
  return (trigger) ? (
    <div className='popup w-full h-screen'>
      <div className='popup-inner'>
      <button className='close-btn' onClick={(e) => {
          e.stopPropagation();
          setTrigger(null);
      }}>close</button>
        <div className='text-1xl text-center font-bold pb-2'>{title}</div>
        <img src={src} alt={title}   className='rounded-md'/>
        <div className='pt-2'>
          {summary && <p className='font-bold'>{summary}</p> }
          {info.map((line, index) => (
            <p key={index}><span>- </span>{line}</p>
          ))}
        </div>
        <div className='font-bold pt-2'>
          {href && <a className='underline' href={href}>Site</a> }
          {href && repo && <span> / </span>}
          {repo && <a className='underline' href={repo}>Repo</a> }
        </div>
        <div className='text-center'>
          Technologies used:
        </div>
        <div className='flex flex-wrap justify-center'>
          {technologies.map((tech, index) => (
            <div key={index} className='rounded-md m-0.5 py-1 px-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
             {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup