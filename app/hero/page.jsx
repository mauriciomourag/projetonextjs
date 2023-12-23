import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#6fc1dd] font-bold p-2'>
          Crie listas sobre qualquer tema
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Seu Expositor Digital
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Compartilhe seus gostos
          </p>          
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Filmes, músicas, jogos, e tudo o que você gosta.</p>
        <button className='bg-[#6fc1dd] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'><Link href="/login" className='p-4'>Começar</Link></button>
      </div>
    </div>
  );
};

export default Hero;