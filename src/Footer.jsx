import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className=' bg-slate-950 h-full p-4 text-white '>
        <div className='py-2'>
          <form action="" className=' justify-center text-center mb-10'>
            <h1 className='text-2xl font-bold pb-2'>Subscribe Form</h1>
            <input type="text" placeholder='Email Address' className='w-[30%] bg-black p-1 px-2 border-b-white border-b hover:border hover:border-slate-100' name="" id="" />
            <div className=''>
              <button className='w-[30%] p-2 font-bold my-3  bg-slate-50 text-black hover:transform hover:duration-700  hover:bg-neutral-400 hover:text-white animate-pulse'>Submit</button>
            </div>
          </form>
          <div className='text-1sm text-center font-thin space-y-1 '>
            <div>
              <span className=' cursor-pointer'>info@my-domain.com</span>
            </div>
            <div>
              <span>992-857-9583</span>
            </div>
            <div>
              <span>NH-52 siker-rod jaipur </span>
            </div>
            <div>
              <span>Loharwada,PIN.303807</span>
            </div>
            <div className='flex  justify-center space-x-4 py-3 text-xl'>
              <div><i className='bi bi-facebook  cursor-pointer hover:text-blue-500 duration-300 transform hover:scale-105 transition'></i></div>
              <div><i className='bi bi-instagram cursor-pointer hover:text-red-400  duration-300 transform hover:scale-105 transition'></i></div>
              <div><i className='bi bi-linkedin  cursor-pointer hover:text-blue-600 duration-300 transform hover:scale-105 transition'></i></div>
            </div>
            <div>
              <span>©2035 by 30°F. Powered and secured </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
