import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Login() {
    return (
        <>
            {/* <Header /> */}
            <div class="toast show w-full ">
                <div class="toast-header m-auto justify-between content-center">
                    <strong class="me-auto "></strong>
                    <button type="button" class="btn-close px-3" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body m-auto text-center space-y-8 ">
                    <p className='text-black text-4xl font-semibold'>Demo Mode</p>
                    <p className='text-xl font-semibold '>To make this template yours, start editing it.</p>
                    <button className='bg-black text-slate-600 w-40 py-2 text-2sm hover:text-slate-100 transform hover:scale-125 transition'> <span className=''>OK</span></button>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Login
