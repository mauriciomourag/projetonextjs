"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#6fc1dd]'>Expositor</h1>
      <ul className='hidden md:flex'>
      <li><Link href="/" className='p-4'>Início</Link></li>
      <li><Link href="/" className='p-4'>Indisponível</Link></li>
      <li><Link href="/" className='p-4'>Indisponível</Link></li>
      <li><Link href="/login"className='bg-[#6fc1dd] rounded-md font-medium mx-auto p-3 text-black' >Login</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#6fc1dd] m-4'>Expositor</h1>
          <li><Link href="/" className='p-4 border-b border-gray-600'>Início</Link></li>
          <li><Link href="/" className='p-4 border-b border-gray-600'>Indisponível</Link></li>
          <li><Link href="/" className='p-4 border-b border-gray-600'>Indisponível</Link></li>
          <li><Link href="/login" className='p-4'>Login</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;