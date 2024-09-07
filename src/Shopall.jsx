// import React from 'react'
import Header from './Header'
import Footer from './Footer'
import React, { useState } from 'react';

function Shopall() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Header />
            <div className='lg:px-8 text-7xl max-w-8xl  py-24 text-center '>
                <h2 className=' font-bold text-green-400  grid grid-cols-1 gap-y-8 sm:grid-cols-1 sm:gap-12 lg:grid-cols-1'>
                    <span>SHOP <text className='underline'>ALL</text> </span>
                </h2>
            </div>
            <div className=' dfaa lg:px-8 content-center  max-w-8xl py-5'>
                <div className=' w-full text-center '>
                    <button className='mb-4 m-auto text-center border-1 w-40 h-12 border-black hover:text-gray-400 duration-300' onClick={toggleCollapse}>
                        {isOpen ? 'Load Less' : 'Load More'}
                    </button>
                    {isOpen && (
                        <div className='dfaa  mt-8 flex  '>
                            {/* Buraya collapsed içeriği gelecek */}
                            {/* //1// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_1bab3809edff40458de0273c1ee39250~mv2_d_3650_4931_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_1bab3809edff40458de0273c1ee39250~mv2_d_3650_4931_s_4_2.jpg" alt="" />
                                <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">Sale</div>
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br /> <del>$250.00</del> $187.50</span>
                                </div>
                            </div>
                            {/* //2// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_b640a419b6804912a59ccd6faca1b45b~mv2_d_3650_4931_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_b640a419b6804912a59ccd6faca1b45b~mv2_d_3650_4931_s_4_2.jpg" alt="" />
                                <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">New</div>
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br />$250.00</span>
                                </div>
                            </div>
                            {/* //3// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_dc35b70e380e4d34b7436b4bbd970aca~mv2_d_3650_4931_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_dc35b70e380e4d34b7436b4bbd970aca~mv2_d_3650_4931_s_4_2.jpg" alt="" />
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br />$250.00</span>
                                </div>
                            </div>
                            {/* //4// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_6488759a79144c12b61c188aff317872~mv2_d_3650_4931_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_6488759a79144c12b61c188aff317872~mv2_d_3650_4931_s_4_2.jpg" alt="" />
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br />$250.00</span>
                                </div>
                            </div>
                            {/* //5// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_80221fce4bc548b09a65ba17547e0a86~mv2_d_2338_3159_s_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_80221fce4bc548b09a65ba17547e0a86~mv2_d_2338_3159_s_2.jpg" alt="" />
                                <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">Sale</div>
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br /> <del>$200</del>$150.00</span>
                                </div>
                            </div>
                            {/* //6// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_7d896057914c4ccb905f138eaf495109~mv2_d_2338_3159_s_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_7d896057914c4ccb905f138eaf495109~mv2_d_2338_3159_s_2.jpg" alt="" />
                                <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">New</div>
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br />$200.00</span>
                                </div>
                            </div>
                            {/* //7// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_5e9927e400d64e3cb7e37d0c7d717c06~mv2_d_2338_3159_s_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_5e9927e400d64e3cb7e37d0c7d717c06~mv2_d_2338_3159_s_2.jpg" alt="" />
                                <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">Sale</div>
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br /> <del>200</del> $150.00</span>
                                </div>
                            </div>
                            {/* //8// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_b5cef0d20dcb4ccc8dfaa091a7de803d~mv2_d_2338_3159_s_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_b5cef0d20dcb4ccc8dfaa091a7de803d~mv2_d_2338_3159_s_2.jpg" alt="" />
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br />$200.00</span>
                                </div>
                            </div>
                            {/* //9// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_46d4b850e56d4cb39a587a13d126dc2e~mv2_d_3556_4805_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_46d4b850e56d4cb39a587a13d126dc2e~mv2_d_3556_4805_s_4_2.jpg" alt="" />
                                <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">Sale</div>
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br /><del>$80</del> $60.00</span>
                                </div>
                            </div>
                            {/* //10// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_0ea264b80d0a4b6393e44db96b7246ae~mv2_d_3556_4805_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0ea264b80d0a4b6393e44db96b7246ae~mv2_d_3556_4805_s_4_2.jpg" alt="" />
                                <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">New</div>
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br />$80.00</span>
                                </div>
                            </div>
                            {/* //11// */}
                            <div className=' relative hover:scale-105 duration-300'>
                                <img src="https://static.wixstatic.com/media/ea71bb_f463100cb8f642cb973387f4ecbaa550~mv2_d_3556_4805_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_f463100cb8f642cb973387f4ecbaa550~mv2_d_3556_4805_s_4_2.jpg" alt="" />
                                <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">New</div>
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br />$40.00</span>
                                </div>
                            </div>
                            {/* //12// */}
                            <div className='hover:scale-105 duration-300 relative'>
                                <img className=' ' src="https://static.wixstatic.com/media/ea71bb_c1c86c4543584344bb2fe356fc1f8b5e~mv2_d_3556_4805_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_c1c86c4543584344bb2fe356fc1f8b5e~mv2_d_3556_4805_s_4_2.jpg" alt="" />
                                <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">Sale</div>
                                <div className='text-1sm  py-2 font-thin text-center'>
                                    <span>I'm a product <br /> <del>$40</del> $30.00</span>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
                {/* //13// */}
                <div className=' relative hover:scale-105 duration-300 '>
                    <img src="https://static.wixstatic.com/media/ea71bb_0243e2c288644cc6ae9ff87284325371~mv2_d_3619_4888_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0243e2c288644cc6ae9ff87284325371~mv2_d_3619_4888_s_4_2.jpg" alt="" />
                    <div className="absolute  top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">New</div>
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> $80.00</span>
                    </div>
                </div>
                {/* //14// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_7e4e3c9d2d4d4508af467c8d80c4895b~mv2_d_3619_4888_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_7e4e3c9d2d4d4508af467c8d80c4895b~mv2_d_3619_4888_s_4_2.jpg" alt="" />
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> $250.00</span>
                    </div>
                </div>
                {/* //15// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_7313e3a2604240c094dd8a40fc48af48~mv2_d_3619_4888_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_7313e3a2604240c094dd8a40fc48af48~mv2_d_3619_4888_s_4_2.jpg" alt="" />
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> $250.00</span>
                    </div>
                </div>
                {/* //16// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_e77b29654142431cb10c2c86cdc54147~mv2_d_3619_4888_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_e77b29654142431cb10c2c86cdc54147~mv2_d_3619_4888_s_4_2.jpg" alt="" />
                    <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer"> Sale</div>
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> <del>$250.00</del> $187.50</span>
                    </div>
                </div>
                {/* //17// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_711d58f0ce97407f9a5742d1f0ff7a3f~mv2_d_2501_3379_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_711d58f0ce97407f9a5742d1f0ff7a3f~mv2_d_2501_3379_s_4_2.jpg" alt="" />
                    <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">sale</div>
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> <del>$200.00</del> $150.00</span>
                    </div>
                </div>
                {/* //18// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_081f6ec4a6044b0a8155f7e5906a1fd6~mv2_d_2501_3379_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_081f6ec4a6044b0a8155f7e5906a1fd6~mv2_d_2501_3379_s_4_2.jpg" alt="" />
                    <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">New</div>
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> $200.00</span>
                    </div>
                </div>
                {/* //19// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_857272af773646a0a347bcc50690cb26~mv2_d_2501_3379_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_857272af773646a0a347bcc50690cb26~mv2_d_2501_3379_s_4_2.jpg" alt="" />
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> $200.00</span>
                    </div>
                </div>
                {/* //20// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_059f25dd62d442cbac998479d05a8a07~mv2_d_2501_3379_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_059f25dd62d442cbac998479d05a8a07~mv2_d_2501_3379_s_4_2.jpg" alt="" />
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> $200.00</span>
                    </div>
                </div>
                {/* //21// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_2707fb52b0da4e99a67593a2df5798a5~mv2_d_3556_4805_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_2707fb52b0da4e99a67593a2df5798a5~mv2_d_3556_4805_s_4_2.jpg" alt="" />
                    <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">New</div>
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> $80.00</span>
                    </div>
                </div>
                {/* //22// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_33c5c899f41d497a85aa13f78932bf2d~mv2_d_3556_4805_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_33c5c899f41d497a85aa13f78932bf2d~mv2_d_3556_4805_s_4_2.jpg" alt="" />
                    <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">Sale</div>
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> <del>$80.00</del> $60.00</span>
                    </div>
                </div>
                {/* //23// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_d489d42ab84d4e24b4899bfeec342f8b~mv2_d_4519_6107_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_d489d42ab84d4e24b4899bfeec342f8b~mv2_d_4519_6107_s_4_2.jpg" alt="" />
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br />  $40.00</span>
                    </div>
                </div>
                {/* //24// */}
                <div className=' relative hover:scale-105 duration-300'>
                    <img src="https://static.wixstatic.com/media/ea71bb_5635e5a9090d4ff992de49d7cdab6da5~mv2_d_4519_6107_s_4_2.jpg/v1/fill/w_449,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_5635e5a9090d4ff992de49d7cdab6da5~mv2_d_4519_6107_s_4_2.jpg" alt="" />
                    <div className="absolute top-0 text-white bg-black h-6 px-3 font-semibold cursor-pointer">New</div>
                    <div className='text-1sm  py-2 font-thin text-center'>
                        <span>I'm a product <br /> $40.00</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shopall
