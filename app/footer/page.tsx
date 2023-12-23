'use client'

import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#6fc1dd]'>Expositor</h1>
        <p className='py-4'>Expositor é uma empresa fictícia, criado unicamente com propósitos acadêmicos.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Soluções</h6>
        <ul>
            <li className='py-2 text-sm'>Solução 1</li>
            <li className='py-2 text-sm'>Solução 2</li>
            <li className='py-2 text-sm'>Solução 3</li>
            <li className='py-2 text-sm'>Solução 4</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Suporte</h6>
        <ul>
            <li className='py-2 text-sm'>Suporte 1</li>
            <li className='py-2 text-sm'>Suporte 2</li>
            <li className='py-2 text-sm'>Suporte 3</li>
            <li className='py-2 text-sm'>Suporte 4</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Empresa</h6>
        <ul>
            <li className='py-2 text-sm'>Sobre</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Emprego</li>
            <li className='py-2 text-sm'>Notícias</li>
            <li className='py-2 text-sm'>Outros</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Privacidade</li>
            <li className='py-2 text-sm'>Termos</li>
            <li className='py-2 text-sm'>Compromisso</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;