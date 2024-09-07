import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Contact() {
    return (
        <>
            <Header />

            <div className="mx-auto lg:grid lg:grid-cols-1  lg:px-7 pt-9 bg-yellow-300">
                <div className="pera flex m-auto flex-col justify-center px-4 py-5 md:py-16 lg:col-span-7  lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                    <h1 className="mt-10 text-2xl font-bold tracking-tight text-black md:text-3xl lg:text-8xl ">
                        <span> <text className='underline pt-5 sm:grid-cols-1'>CONTACT</text> US</span>
                    </h1>
                </div>
                <div className='lg:px-8 text-2xl max-w-4xl m-auto pb-4 text-center '>
                    <h2 className=' font-semibold text-black  grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-1'>
                        <p>For all order support, please include your order number and date that your order was placed </p>
                    </h2>
                </div>
            </div>
            <div className=' justify-center  flex mt-20 content-center  px-4 gap-2 '>
                <div className='w-[50%]  py-5 justify-between lg:grid bg-red-400 lg:grid-cols-1 lg:gap-x- lg:px-7 m-auto  bg-d-400 shadow my-4 px-16 border-black'>
                    <div className='m-auto bg-red-400 shadow px-5 w-80 justify-between h-96 rounded '>
                        <div className='  py-6 m-auto'>
                            <span className='font-semibold'>OPENING HOURS</span>
                            <p>Mon - Fri: 9am - 7pm</p>
                            <p>Saturday: 11am - 7pm</p>
                            <p>Sunday: 11am - 8pm</p>
                        </div>
                        <div className=' py-6'>
                            <span>
                                <p>500 Terry Francine Street
                                    <br />
                                    San Francisco, CA 94158</p>
                            </span>
                        </div>
                        <div className='  py-2'>
                            <span>
                                <p className=' cursor-pointer'>info@my-domain.com</p>
                            </span>
                        </div>
                        <div className='  py-4'>
                            <span>
                                <p>123-456-7890</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] m-auto justify-between bg-red-400 py-10 my-4 px-16 border-black shadow'>
                    <div className=' shadow px-5 bg-400 rounded py-3 m-auto'>
                        <div className='  py-1 text-black'>
                            <input type="text" placeholder='Name' className='w-[48%] text-black border-slate-500 p-2 px-2 border-2  bg-slate-100  hover:border-black' name="" id="" />
                            <input type="text" placeholder='Email' className='w-[48%] ml-3 border-slate-500 p-2 px-2 border-2  bg-slate-100  hover:border-black' name="" id="" />
                        </div>
                        <div className='  py-1 '>
                            <input type="text" placeholder='Phone' className='w-[48%]  border-slate-500 p-2 px-2 border-2  bg-slate-100  hover:border-black' name="" id="" />
                            <input type="text" placeholder='Address' className='w-[48%] ml-3 border-slate-500 p-2 px-2 border-2  bg-slate-100  hover:border-black' name="" id="" />
                        </div>
                        <div className='  py-1 '>
                            <input type="text" placeholder='Subjest' className='w-[98%] border-slate-500 p-2 px-2 border-2  bg-slate-100  hover:border-black' name="" id="" />
                        </div>
                        <div className='  py-1 '>
                            <input type="text" placeholder='Type your message here' className='w-[98%] border-slate-500 pt-2 pb-20 px-2  bg-slate-100  border-2 hover:border-black' name="" id="" />
                        </div>
                        <div className='  pt-4 relative  '>
                            <button className=' w-[98%] py-3 font-bold text-center bg-black text-white hover:bg-slate-400' >Submit</button>
                            <div className="absolute w-[98%] inset-0 mt-3 bg-gradient-to-t h-16 hover:duration-500   hover:from-red-400  to-transparent cursor-pointer"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
