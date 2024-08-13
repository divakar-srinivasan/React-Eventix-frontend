import React, { useState } from 'react'
import logo from '../images/EVENTIX.png'
import { IoMenu } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { Link , Outlet } from 'react-router-dom';

const Home = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <>
    <div className='flex items-center justify-between md:px-16 md:py-5 px-2 py-3 bg-black'>
    <img className='md:h-16 md:w-32 h-16 w-28' src={logo} alt='loading'/>
      <nav className='hidden md:block'>
        <ul className='flex gap-6'>
            <li className='nav-link'><Link to='about'>About</Link></li>
            <li className='nav-link'>About</li>
            <li className='nav-link'>Events</li>
            <li className='nav-link'>Contact</li>                    
        </ul>

      </nav>
      { toggleMenu && <nav className='md:hidden block'>
        <ul className='flex flex-col fixed h-auto w-full bg-zinc-900 top-20 left-0 p-5 items-center border-x-2 border-b-2 rounded-lg'>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>About</li>
            <li className='nav-link'>Events</li>
            <li className='nav-link'>Contact</li>
          </ul>
      </nav>}
      <div className='flex md:gap-5 gap-3 items-center'>
      <input className='bg-custom-black w-36 h-10 md:w-56 border-2 border-gray-400 rounded-lg text-white px-2 hover:border-custom-red placeholder-slate-200 hover:placeholder-white hover:bg-gray-900 hover:scale-105'  
      type='text' placeholder='    Search'/>
      <IoMdContact className='h-8 w-8 text-white hover:text-custom-red' /> 
      <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden text-white hover:text-custom-red'><IoMenu className='h-8 w-8'/></button>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Home