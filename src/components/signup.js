import React, { useState } from 'react';
import logo from '../images/EVENTIX.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [step, setStep] = useState('email'); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleNext = () => {
    if (email) {
      setStep('password'); 
    }
  };
  const handleBack = () => setStep('email'); 
  const handleSubmit = () => {
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className='bg-img'>
    <div className='flex itmes-center justify-between px-24 py-5'>
    <img src={logo} alt='loading' className='h-18 w-32' />
    <button className='btn' onClick={()=>navigate('/signin')}>Signin</button>
    </div>
    <div className='flex items-center justify-center min-h-screen'>
      {step === 'email' && (
        <div className='flex-col space-y-10'>
          <div className='flex justify-center '>
            <div className='flex flex-col items-center justify-center text-center space-y-4'>
            <h1 className='text-4xl text-white font-bold'>Unlock Exclusive Access to College Events! Sign Up Today!</h1>
            <h1 className='text-white text-xl font-semibold'>Book anywhere. Cancel anytime.</h1>
            <h1 className='text-white text-xl '>Ready to Register? Book your Tickets, Enjoy the Events with your Friends</h1>
            </div>
          </div>
          <div className='flex space-x-5 items-center justify-center'>
          
          <input
            className='input'
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
          <button className='btn' 
          onClick={handleNext}>Next </button>
          </div>
        </div>
      )}

      {step === 'password' && (
        
        <div className='flex flex-col'>
          <div className='flex justify-center '>
            <div className='flex flex-col items-center justify-center text-center space-y-4'>
            <h1 className='text-4xl text-white font-bold'>Join the Fun! Sign Up Now to Book Your Event Tickets!</h1>
            <h1 className='text-white text-xl font-semibold'>Ready for Fun. Sign Up.</h1>
            <h1 className='text-white text-xl '>Ready for Events? Confirm your Slots</h1>
            </div>
          </div>
          <div className='flex items-center justify-center mt-9 space-x-5'>
          <button className='btn' onClick={handleBack}>Back</button>
          <input
          className='input'
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className='btn' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Signup;
