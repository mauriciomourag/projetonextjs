'use client'

import React from 'react';
import Single from './card2.png'
import Double from './card1.png'
import Triple from './card3.png'
import Image from 'next/image';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <Image className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Plano Standard</h2>
              <p className='text-center text-4xl font-bold'>R$5,00</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>50 Listas</p>
                  <p className='py-2 border-b mx-8'>1 Usuário</p>
                  <p className='py-2 border-b mx-8'>3 Meses de adesão</p>
              </div>
              <button className='bg-[#6fc1dd] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Começar</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <Image className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Plano Completo</h2>
              <p className='text-center text-4xl font-bold'>R$30,00</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Listas ilimitadas</p>
                  <p className='py-2 border-b mx-8'>1-5 Usuários</p>
                  <p className='py-2 border-b mx-8'>6 Meses de adesão</p>
              </div>
              <button className='bg-black text-[#6fc1dd] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Começar</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <Image className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Plano Compartilhado</h2>
              <p className='text-center text-4xl font-bold'>R$15,00</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>100 Listas</p>
                  <p className='py-2 border-b mx-8'>2-3 Usuários</p>
                  <p className='py-2 border-b mx-8'>3 meses de adesão</p>
              </div>
              <button className='bg-[#6fc1dd] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Começar</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;