import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full hscreen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex'>
          <div>
            <p>Contact</p>
            <p>Submit the form below to get in touch with me</p>
          </div>

          <div>
            <form action='' className='' >
              <input 
                type='text' 
                name='name' 
                placeholder='Enter your name' 
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
              />
              <input 
                type='text' 
                name='email' 
                placeholder='Enter your email' 
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
              />
              <textarea 
                name='message' 
                rows={10} 
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              ></textarea>
              <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk!</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact