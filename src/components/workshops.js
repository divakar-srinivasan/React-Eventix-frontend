import React, { useEffect, useRef } from 'react';
import useSound from 'use-sound';
import boop from '../sounds/notify.mp3';
import gsap from 'gsap';

const Workshops = () => {
  const [Sound] = useSound(boop);
  const h1 = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({

    });
    
    t1.from(h1.current, {
      x: -500,
      duration: 1,
      ease: 'power2.out',
      onStart: () => {
        Sound(); // Trigger the sound after the animation
      },
    });
  }, [Sound]); // Include 'playSound' in the dependency array

  return (
    <div className='flex justify-center items-center'>
      <h1 ref={h1} className='text-4xl'>Welcome</h1>
    </div>
  );
}

export default Workshops;
