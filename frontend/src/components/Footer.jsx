import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left Section  */}
            <div>
                <img className='mb-5 w-40' src={assets.medinova} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis odit delectus, praesentium velit saepe asperiores unde explicabo dolorum voluptas incidunt similique aperiam quos est debitis cumque omnis assumenda aut magnam.</p>
            </div>
            {/* center Section  */}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* right Section  */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+2-123-456-789</li>
                    <li>vikashsharma4991@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* Copyright Text  */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright2026@Vikash-All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
