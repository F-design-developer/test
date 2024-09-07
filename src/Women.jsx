// import React from 'react'
import Header from './Header'
import Footer from './Footer'
import React, { useState } from 'react';


function Women() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header />
      <div className='lg:px-8 text-7xl max-w-8xl  py-24  '>
        <h2 className=' font-bold text-green-400 grid grid-cols-1 gap-y-8  sm:grid-cols-1 sm:gap-12 lg:grid-cols-1 '>
          <span className=' m-auto'> <text className='underline justify-around'>WOMEN</text> </span>
        </h2>
      </div>

      <div className=' cfc lg:px-8  bg-slate-100  max-w-8xl my-4 '>
        {/* //1// */}
        <div className=' relative hover:scale-105 duration-300 '>
          <img className='' src="https://m.media-amazon.com/images/I/71w7ghKOI4L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
          <div className="absolute  top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">New</div>
          <div className='text-1sm  py-2 font-thin text-center'>
            <span>I'm a product <br /> $80.00</span>
          </div>
        </div>
        {/* //2// */}
        <div className=' relative hover:scale-105 duration-300'>
          <img src="https://m.media-amazon.com/images/I/615ymHM7d2L._SX679_.jpg" alt="" />
          <div className='text-1sm  py-2 font-thin text-center'>
            <span>I'm a product <br /> $250.00</span>
          </div>
        </div>
        {/* //3// */}
        <div className=' relative hover:scale-105 duration-300'>
          <img src="https://m.media-amazon.com/images/I/714JM+D4pYL._SX679_.jpg" alt="" />
          <div className='text-1sm  py-2 font-thin text-center'>
            <span>I'm a product <br /> $250.00</span>
          </div>
        </div>
        {/* //4// */}
        <div className=' relative hover:scale-105 duration-300'>
          <img src="https://m.media-amazon.com/images/I/71o6lViwcjL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
          <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer"> Sale</div>
          <div className='text-1sm  py-2 font-thin text-center'>
            <span>I'm a product <br /> <del>$250.00</del> $187.50</span>
          </div>
        </div>
        {/* //5// */}
        <div className=' relative hover:scale-105 duration-300'>
          <img src="https://m.media-amazon.com/images/I/31+uKiC+a-L._AC_SR320,400_.jpg" alt="" />
          <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">sale</div>
          <div className='text-1sm  py-2 font-thin text-center'>
            <span>I'm a product <br /> <del>$200.00</del> $150.00</span>
          </div>
        </div>
        {/* //6// */}
        <div className=' relative hover:scale-105 duration-300'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0FJmqEaJzHoFFOlPH33HiQg6hpTHsfw1wqnB19PkUoeMT8P3" alt="" />
          <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">New</div>
          <div className='text-1sm  py-2 font-thin text-center'>
            <span>I'm a product <br /> $200.00</span>
          </div>
        </div>
        {/* //7// */}
        <div className=' relative hover:scale-105 duration-300'>
          <img src="https://static.wixstatic.com/media/ea71bb_857272af773646a0a347bcc50690cb26~mv2_d_2501_3379_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_857272af773646a0a347bcc50690cb26~mv2_d_2501_3379_s_4_2.jpg" alt="" />
          <div className='text-1sm  py-2 font-thin text-center'>
            <span>I'm a product <br /> $200.00</span>
          </div>
        </div>
        {/* //8// */}
        <div className=' relative hover:scale-105 duration-300'>
          <img src="https://static.wixstatic.com/media/ea71bb_059f25dd62d442cbac998479d05a8a07~mv2_d_2501_3379_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_059f25dd62d442cbac998479d05a8a07~mv2_d_2501_3379_s_4_2.jpg" alt="" />
          <div className='text-1sm  py-2 font-thin text-center'>
            <span>I'm a product <br /> $200.00</span>
          </div>
        </div>



      
      </div>

      <Footer />

    </>
  )
}

export default Women
