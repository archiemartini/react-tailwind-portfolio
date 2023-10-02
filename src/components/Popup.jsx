import React from 'react'

const Popup = ({trigger, setTrigger, title, href, repo, summary, imageSrc, info}) => {
  return (trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => setTrigger(null)}>close</button>
        <div className='text-1xl text-center font-bold'>{title}</div>
        <img src={imageSrc} alt=''   className=''/>
        <div className='pt-2'>
          {summary && <p className='font-medium'>{summary}</p> }
          {info.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className='font-bold pt-2'>
          {href && <a className='underline' href={href}>Site</a> }
          {href && repo && <span> / </span>}
          {repo && <a className='underline' href={repo}>Repo</a> }
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup