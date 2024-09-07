import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            {/* //---Header---// */}
            <div className="relative w-full bg-slate-950 py-1">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-6">
                    <div className=' hidden grow  lg:flex text-white  '>
                        <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoptGjkWCCUUAqUO0cFZlYtQncD43yOFS7D-FW-2NO-b0FHIoDdn2EVz1fheemW1_nrO0&usqp=CAU" alt="" />
                    </div>
                    <div className="inline-flex ">
                        <span className="font-bold"></span>
                    </div>

                    <div className="hidden grow items-start lg:flex">
                        <ul className=" inline-flex space-x-8 ">
                            <li>
                                <Link to={'/shopall'}>
                                    <a href="#" className="inline-flex items-center text-sm  text-slate-50 hover:text-slate-400 duration-300">
                                        Shop all
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/women'}>
                                    <a href="#" className="inline-flex items-center text-sm  text-slate-50 hover:text-slate-400 duration-300">
                                        Women
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/men'}>
                                    <a href="#" className="inline-flex items-center text-sm  text-slate-50 hover:text-slate-400 duration-300">
                                        Men
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/sale'}>
                                    <a href="#" className="inline-flex items-center text-sm  text-slate-50 hover:text-slate-400 duration-300">
                                        Sale
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/about'}>
                                    <a href="#" className="inline-flex items-center text-sm  text-slate-50 hover:text-slate-400 duration-300" >
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/store'}>
                                    <a href="#" className="inline-flex items-center text-sm  text-slate-50 hover:text-slate-400 duration-300" >
                                        Store policies
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>
                                    <a href="#" className="inline-flex items-center text-sm  text-slate-50 hover:text-slate-400 duration-300">
                                        Contact
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className="hidden space-x-2 lg:block ml-4 text-white">
                        <Link to={'/login'}> <button type="button" className=" duration-500 animate-bounce rounded-md border border-white hover:text-slate-400 px-3 py-2 text-sm font-semibold hover:bg-[#201f1f]  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            Log In
                        </button>
                        </Link>
                    </div>
                    <div className='hidden space-x-2 lg:block ml-4 '>
                        <ul className='m-auto text-2xl cursor-pointer  '>
                            <i><i className=" text-slate-50 hover:text-slate-400 hover:text-bold">
                                <div className="offcanvas offcanvas-end" id="demo">
                                    <div className="offcanvas-header bg-black  ">
                                        <button type="button" className="bi bi-chevron-right  text-white" data-bs-dismiss="offcanvas"></button>
                                        <h1 className="offcanvas-title text-white font-bold ml-64">CART</h1>
                                    </div>
                                    <div className="offcanvas-body font-semibold text-1xl m-auto">
                                        <p className=''>Cart is empty</p>
                                    </div>
                                </div>
                                <div className="container-fluid ">
                                    <button className=" bi bi-bag-check duration-300" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    </button>
                                </div>
                            </i></i>
                        </ul>
                    </div>

                    <div className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6 cursor-pointer"
                        >
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='w-full bg-green-400 p-5 '>
                <div className='w-full contents  text-center py-5'>
                    <div className='item-center items-center w-80 m-auto ' >
                        <Link to={'/'}>
                            <img className='m-auto h-14' src="https://static.wixstatic.com/media/ea71bb_c9dad503c8b745cabf619a7ad1ef7028~mv2.png/v1/fill/w_241,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_c9dad503c8b745cabf619a7ad1ef7028~mv2.png" alt="" />
                        </Link>
                    </div>
                    <div className=' text-slate-100'>
                        <span>

                            Ideal weather, superb clothing
                        </span>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Header
