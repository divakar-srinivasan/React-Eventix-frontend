import React, { useEffect, useRef } from 'react';
import useSound from 'use-sound';
import boop from '../sounds/notify.mp3';
import gsap from 'gsap';

const Workshops = () => {
  const [Sound] = useSound(boop);
  const h = useRef(null);

  useEffect(() => {
    const t2 = gsap.timeline();
    
    t2.from(h.current, {
      x: -500,
      duration: 1,
      ease: 'power2.out',
      onStart: () => {
        Sound(); 
      },
    });
  }, [Sound]);

  return (
    <div className='flex justify-center items-center'>
      <h1 ref={h} className='text-4xl'>Welcome</h1>
    </div>
  );
}

export default Workshops;
