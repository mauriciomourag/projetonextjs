'use client'
import React from 'react';

const SaberMais = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Quer saber um pouco mais sobre nós?
          </h1>
          <p>Nós enviaremos um email para você explicando melhor nosso negócio</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Seu Email'
            />
            <button className='bg-[#6fc1dd] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Enviar
            </button>
          </div>
          <p>
            Não compartilharemos os seus dados!{' '}
            <span className='text-[#6fc1dd]'>Política de privacidade.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaberMais;