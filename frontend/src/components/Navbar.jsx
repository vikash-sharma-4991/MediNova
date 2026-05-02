import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {

    const navigate = useNavigate();
    const [showMenu, setShowmenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={() => {navigate("/"); scrollTo(0,0)}} src={assets.medinova} alt="Medora Logo" className='h-15 w-auto object-contain cursor-pointer' />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to="/">
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-purple-500 w-4/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/doctors">
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-purple-500 w-4/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/about">
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-purple-500 w-4/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/contact">
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-purple-500 w-4/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img src={assets.profile_pic_1} alt="" className='w-15 rounded-full'/>
                <img src={assets.dropdown_icon} alt="" className='w-2.5' />
                <div className='absolute top-6 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-300 rounded flex flex-col gap-4 p-4'>
                        <p onClick={() => navigate("my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={() => navigate("my-appointments")} className='hover:text-black cursor-pointer'>My Appointment</p>
                        <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>:<button onClick={() => navigate('/login')} className='bg-purple-500 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>}
        </div>
    </div>
  )
}

export default Navbar
