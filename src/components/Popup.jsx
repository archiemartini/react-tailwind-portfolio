import React, { useEffect } from 'react'

const Popup = ({trigger, setTrigger, portfolio}) => {
  const { title, src, href, repo, summary, info, technologies } = portfolio

  useEffect(() => {
    if (trigger) {
        document.body.style.overflow = 'hidden'; 
    }
    return () => {
        document.body.style.overflow = 'unset'; 
    };
  }, [trigger]);

  return (trigger) ? (
    <div className='popup flex justify-center items-center'>
      <div className='popup-inner relative rounded-lg shadow-md'>
        <button className='close-btn' onClick={(e) => {
            e.stopPropagation();
            setTrigger(null);
        }}>&times;</button>
        <div className='text-1xl text-center font-extrabold pb-2'>{title}</div>
        <img src={src} alt={title} className='rounded-md w-full mb-4 shadow-lg'/>
        <div className='pt-2'>
          {summary && <p className='font-bold'>{summary}</p> }
          {info.map((line, index) => (
            <p key={index} className='mb-1'><span>- </span>{line}</p>
          ))}
        </div>
        <div className='font-bold pt-2 flex justify-center space-x-4'>
          {href && <a className='underline hover:text-blue-500' href={href}>Site</a>}
          {repo && <a className='underline hover:text-blue-500' href={repo}>Repo</a>}
        </div>
        <div className='text-center font-medium my-2'>Technologies used:</div>
        <div className='flex flex-wrap justify-center gap-2'>
          {technologies.map((tech, index) => (
            <span key={index} className='bg-gray-200 rounded-md px-2 py-1 hover:bg-blue-500 hover:text-white transition cursor-default'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup
