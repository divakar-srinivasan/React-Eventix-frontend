import React from 'react';
import logo from '../images/EVENTIX.png';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-img'>
      <div className='flex itmes-center px-24 py-5'><img src={logo} alt='loading' className='h-18 w-32'/></div>
      <div className='flex items-center justify-center mt-3'>
          <div className='signin-container'>
            <h1 className='text-white font-bold text-3xl mb-4'>Sign In</h1>
            <input className='input' type='text' placeholder='Email or mobile number'/>
            <input className='input' type='password' placeholder='Password'/>
            <button className='signin-btn'>Sign In</button>
            <h1 className='text-white cursor-pointer hover:text-sky-500'>Forget password?</h1>
            <h1 className='text-center text-gray-400 text-xl'>OR</h1>
            <h1 className='text-gray-400'>New to Eventix? <span className='text-white cursor-pointer hover:underline' onClick={()=>navigate('/signup')}> Sign up now</span></h1>
            <p className='text-sm text-gray-400 mt-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-sky-500 cursor-pointer'> Learn more.</span></p>
          </div>
      </div>
    </div>
  )
}

export default Signin