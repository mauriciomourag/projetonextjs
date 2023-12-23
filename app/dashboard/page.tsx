'use client'

import React from 'react';
import Image from 'next/image';
import Laptop from './laptop2.gif'
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image src={Laptop} width={500} height={200} alt=''/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Dashboard Simples</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Criar, Editar, Deletar, Compartilhar Tudo em Único Dashboard.</h1>
          <p>
            O dashboard da Expositor, oferece diversas ferramentas para você criar suas listas da forma que você quiser. Quer fazer um "top 10 filmes de aventura?" Você consegue!
            Quer fazer um "top 5 jogos que eu mais gosto?" Você consegue!
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'><Link href="/login" className='p-4'>Começar</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;