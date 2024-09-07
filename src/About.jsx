// import React from 'react'
import Header from './Header'
import Footer from './Footer'
import React, { useState } from 'react';

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header />

      <div className="relative w-full bg-gray-200 ">
        <div className="mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-">
          <div className="pera flex m-auto flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-2xl font-bold tracking-tight text-black md:text-3xl lg:text-5xl">
              <span>OUR <br /> <text className='underline pt-5 space-y-4'>STORY</text></span>
            </h1>
            <p className="lg:w-96 mt-10 text-3sm text-gray-700 font-extralight ">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <p className="lg:w-96 mt-12 text-3sm text-gray-700 font-extralight">
              This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out
            </p>
          </div>
          <div className="relative  lsuni g:col-span-5 lg:-mr-8 xl:col-span-6"></div>
        </div>
      </div>

      <div className='py-20 bg-gray-300'>
        <div className="mx-auto lg:text-center py-5 ">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-8xl underline py-4">
            FAQ
          </h2>
        </div>

        <div className='flex flex-wrap justify-around w-3/4 item-center m-auto  egil pl-20 font-thin'>
          <div className='w-2/4 pb-5 '>
            <h1 className='text-2xl font-bold py-4'>
              What is your return policy?</h1>
            <p className='text-3sm w-[74%]'>
              Enter your answer to the question here. Make sure the writing is clear and concise, and helps visitors get the support they need in the most efficient way. Consider elaborating with examples or visual aids to ensure all users fully understand the information.
            </p>
          </div>
          <div className='w-2/4 pb-5'>
            <h1 className='text-2xl font-bold py-4'>
              What are your payment methods?</h1>
            <p className='text-3sm w-[74%]'>
              Enter your answer to the question here. Make sure the writing is clear and concise, and helps visitors get the support they need in the most efficient way. Consider elaborating with examples or visual aids to ensure all users fully understand the information.
            </p>
          </div>
          <div className='w-2/4 pb-5'>
            <h1 className='text-2xl font-bold py-4'>
              Do you offer rentals?</h1>
            <p className='text-3sm w-[74%]'>
              Enter your answer to the question here. Make sure the writing is clear and concise, and helps visitors get the support they need in the most efficient way. Consider elaborating with examples or visual aids to ensure all users fully understand the information.
            </p>
          </div>
          <div className='w-2/4 pb-5'>
            <h1 className='text-2xl font-bold py-4'>
              Do you sell your products offline?</h1>
            <p className='text-3sm w-[74%]'>
              Enter your answer to the question here. Make sure the writing is clear and concise, and helps visitors get the support they need in the most efficient way. Consider elaborating with examples or visual aids to ensure all users fully understand the information.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About
