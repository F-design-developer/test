import Header from './Header'
import Footer from './Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";

function Thirty() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(600);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <Header />

            <div className='frif mb-16  '><div data-target="card-skew.shine" class="wdd position-absolute bottom-0 right-0 events-none z-n1" ></div>
                <div className=' text-center h-full text-8xl font-bold m-auto'>
                    <h1 class="font_3 wixui-rich-text__text pt- h-full content-center">
                        <span class="color_15 wixui-rich-text__text m-auto items-center text-center ">
                            <span class="wixui-rich-text__text">ARE YOU</span>
                        </span> <br />
                        <span class="color_15 wixui-rich-text__text m-auto items-center text-center ">
                            <span class="wixui-rich-text__text"><text className=' underline'>READY</text> TO HIT</span>
                        </span> <br />
                        <span class="color_15 wixui-rich-text__text m-auto items-center text-center ">
                            <span class="wixui-rich-text__text">THE SLOPES?</span>
                        </span> <br />
                        <span class="color_15 wixui-rich-text__text m-auto items-center text-center ">
                            <span class="wixui-rich-text__text text-2xl">We've got you covered</span>
                        </span> <br />
                        <span class="color_15 wixui-rich-text__text m-auto items-center text-center text-green-400 ">
                            <button className='border-green-400 border-3 p-2 px-4 text-xl hover:bg-green-400 rounded-full   duration-300 hover:text-black '> Shop Now</button>
                        </span>
                    </h1>
                </div>
            </div>


            <div className='flex  gap-4 justify-center py-3 mb-20 '>

                <div className="relative h-[450px] w-[450px] rounded-md">
                    <img
                        src="https://static.wixstatic.com/media/ea71bb_bd31415cb96b4b6fa27279462a58cb06~mv2_d_4347_3375_s_4_2.jpg/v1/fill/w_540,h_550,fp_0.59_0.29,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_bd31415cb96b4b6fa27279462a58cb06~mv2_d_4347_3375_s_4_2.jpg"
                        alt="AirMax Pro"
                        className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-200 to-transparent"></div>
                    <div className="absolute bottom-0 h-64 w-full">
                        <h1 className="text-5xl font-bold text-white text-center ">WOMEN</h1>
                    </div>
                </div>
                <div className="relative h-[450px] w-[450px] rounded-md">
                    <img
                        src="https://static.wixstatic.com/media/ea71bb_9dadb8508e8643248cea5e3b26252906~mv2_d_3008_2327_s_2.jpg/v1/fill/w_543,h_550,fp_0.49_0.25,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_9dadb8508e8643248cea5e3b26252906~mv2_d_3008_2327_s_2.jpg"
                        alt="AirMax Pro"
                        className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-400 to-transparent "></div>
                    <div className="absolute bottom-0 h-64 w-full">
                        <h1 className="text-5xl font-bold text-white text-center">MEN</h1>
                    </div>
                </div>
                <div className="relative h-[450px] w-[450px] rounded-md">
                    <img
                        src="https://static.wixstatic.com/media/ea71bb_70e70d8302154db4a22b713d4bbf3753~mv2_d_4305_3338_s_4_2.jpg/v1/fill/w_543,h_550,fp_0.79_0.24,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_70e70d8302154db4a22b713d4bbf3753~mv2_d_4305_3338_s_4_2.jpg"
                        alt="AirMax Pro"
                        className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-200 to-transparent"></div>
                    <div className="absolute bottom-0 h-64 w-full ">
                        <h1 className="text-5xl font-bold text-white text-center">SALE</h1>
                    </div>
                </div>
            </div>

            <div className='eoyk  relative '>
                {/* <div className="absolute bottom- inset-0  bg-gradient-to-t from-gray-200 to-transparent "></div> */}
                <div className=' text-center h-full text-7xl m-auto'>
                    <h1 class="font_3 wixui-rich-text__text  h-full content-center  ">
                        <span class="color_15 wixui-rich-text__text m-auto items-center text-center  font-bold ">
                            <span class="wixui-rich-text__text text-green-400">OUR <br /> <text className=' underline '>BRANDS</text></span>
                        </span> <br />
                        <span class="color_15 wixui-rich-text__text m-auto items-center text-center">
                            <p class="wixui-rich-text__text text-sm w-[50%] m-auto py-4 text-slate-50">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </span>
                    </h1>
                </div>
            </div>




            <div className='bg-green-400 '>
                <div className="mx-auto max-w-5xl py-20 px-1 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 py-14 content-center">
                        <div className=''>
                            <div className="mx-auto flex h-20 w-40 items-center justify-center ">
                                <img className='' src="https://static.wixstatic.com/media/ea71bb_f01834adb3e34eb9ac7666c0f339e4ea~mv2.png/v1/fill/w_275,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_f01834adb3e34eb9ac7666c0f339e4ea~mv2.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="mx-auto flex h-20 w-40 items-center justify-center  ">
                                <img src="https://static.wixstatic.com/media/ea71bb_b9653dfc92834a838c15096e6150a5ee~mv2.png/v1/fill/w_275,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_b9653dfc92834a838c15096e6150a5ee~mv2.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="mx-auto flex h-20 w-40 items-center justify-center  ">
                                <img src="https://static.wixstatic.com/media/ea71bb_89a48c626c014be8b08f751124a19333~mv2.png/v1/fill/w_275,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_89a48c626c014be8b08f751124a19333~mv2.png" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className="mx-auto flex h-20 w-40 items-center justify-center">
                                <img src="https://static.wixstatic.com/media/ea71bb_692af250f8f94a79ab8147111fe10ce4~mv2.png/v1/fill/w_275,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_692af250f8f94a79ab8147111fe10ce4~mv2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:px-8 text-7xl max-w-8xl  py-24 text-center '>
                <h2 className=' font-bold text-green-400  grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-1'>
                    <span>NEW <text className='underline'>ARRIVALS</text> </span>
                </h2>
            </div>

            <div className="slider m-auto content-center bg-gray-200  items-center text-center justify-self-center  px-7  mb-4 ">
                <button className="button fmn bg-sky-900 " onClick={() => setWidth(width + 100)}>
                    {" "}
                    {" "}
                </button>
                <button className="button " onClick={() => setWidth(width - 100)}>
                    {" "}
                    {" "}
                </button>
                <button className="button " onClick={() => setDisplay(!display)}>
                    {" "}
                    {" "}
                </button>
                <div>
                    <div className=''>
                        <Slider {...settings} className=' pl-5 '>
                            {/* hover:duration-1000 transform hover:scale-105 transition ease-linear */}
                            <div className=''>
                                <div>
                                    <img className='w-80 cursor-pointer hover:scale-105 duration-300' src="https://static.wixstatic.com/media/ea71bb_0243e2c288644cc6ae9ff87284325371~mv2_d_3619_4888_s_4_2.jpg/v1/fill/w_431,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0243e2c288644cc6ae9ff87284325371~mv2_d_3619_4888_s_4_2.jpg" alt="" />
                                </div>
                                <div className='text-1sm text-gray-400 py-3'>
                                    <span>I'm a product <br /> $250.00</span>
                                </div>
                            </div>
                            <div>
                                <div className=''>
                                    <img className='w-80 cursor-pointer hover:scale-105 duration-300' src="https://static.wixstatic.com/media/ea71bb_b640a419b6804912a59ccd6faca1b45b~mv2_d_3650_4931_s_4_2.jpg/v1/fill/w_431,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_b640a419b6804912a59ccd6faca1b45b~mv2_d_3650_4931_s_4_2.jpg" alt="" />
                                </div>
                                <div className='text-1sm text-gray-400 py-3'>
                                    <span>I'm a product <br /> $250.00</span>
                                </div>
                            </div>
                            <div>
                                <div className='relative'>
                                    <img className='w-80 cursor-pointer hover:scale-105 duration-300 ' src="https://static.wixstatic.com/media/ea71bb_f463100cb8f642cb973387f4ecbaa550~mv2_d_3556_4805_s_4_2.jpg/v1/fill/w_431,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_f463100cb8f642cb973387f4ecbaa550~mv2_d_3556_4805_s_4_2.jpg" alt="" />
                                </div>
                                <div className='text-1sm text-gray-400 py-3'>
                                    <span>I'm a product <br /> $40.00</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className='w-80 cursor-pointer hover:scale-105 duration-300' src="https://static.wixstatic.com/media/ea71bb_2707fb52b0da4e99a67593a2df5798a5~mv2_d_3556_4805_s_4_2.jpg/v1/fill/w_431,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_2707fb52b0da4e99a67593a2df5798a5~mv2_d_3556_4805_s_4_2.jpg" alt="" />
                                </div>
                                <div className='text-1sm text-gray-400 py-3'>
                                    <span>I'm a product <br /> $80.00</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className='w-80 cursor-pointer hover:scale-105 duration-300 ' src="https://static.wixstatic.com/media/ea71bb_081f6ec4a6044b0a8155f7e5906a1fd6~mv2_d_2501_3379_s_4_2.jpg/v1/fill/w_431,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_081f6ec4a6044b0a8155f7e5906a1fd6~mv2_d_2501_3379_s_4_2.jpg" alt="" />
                                </div>
                                <div className='text-1sm text-gray-400 py-3'>
                                    <span>I'm a product <br /> $200.00</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className='w-80 cursor-pointer hover:scale-105 duration-300' src="https://static.wixstatic.com/media/ea71bb_0ea264b80d0a4b6393e44db96b7246ae~mv2_d_3556_4805_s_4_2.jpg/v1/fill/w_431,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0ea264b80d0a4b6393e44db96b7246ae~mv2_d_3556_4805_s_4_2.jpg" alt="" />
                                </div>
                                <div className='text-1sm text-gray-400 py-3'>
                                    <span>I'm a product <br /> $80.00</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className='w-80 cursor-pointer hover:scale-105 duration-300' src="https://static.wixstatic.com/media/ea71bb_5e9927e400d64e3cb7e37d0c7d717c06~mv2_d_2338_3159_s_2.jpg/v1/fill/w_431,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_5e9927e400d64e3cb7e37d0c7d717c06~mv2_d_2338_3159_s_2.jpg" alt="" />
                                </div>
                                <div className='text-1sm text-gray-400 py-3'>
                                    <span>I'm a product <br /> $200.00</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className='w-80 cursor-pointer hover:scale-105 duration-300' src="https://static.wixstatic.com/media/ea71bb_5635e5a9090d4ff992de49d7cdab6da5~mv2_d_4519_6107_s_4_2.jpg/v1/fill/w_431,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_5635e5a9090d4ff992de49d7cdab6da5~mv2_d_4519_6107_s_4_2.jpg" alt="" />
                                </div>
                                <div className='text-1sm text-gray-400 py-3'>
                                    <span>I'm a product <br /> $40.00</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <div className='lg:px-8 content-center  max-w-8xl h-80 bg-green-400 text-center  '>
                <span className='m-auto text-5xl font-semibold text-slate-200 mt-20'>Follow us on Instagram</span>
            </div>


            <div className=' fff lg:px-8 content-center  max-w-8xl my-4'>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/01.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr duration-300  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/02.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/03.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/04.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/05.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/06.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/07.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/08.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/09.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/10.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/11.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer"></div>
                </div>
                <div className=' relative'>
                    <img src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/ADI/Online%20Ski%20Shop/12.jpg" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-tr  hover:from-gray-800  to-transparent cursor-pointer "></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Thirty
