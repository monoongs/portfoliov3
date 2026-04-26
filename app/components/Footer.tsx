import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className='bg-[#ececed] w-screen -mx-10 py-5'>
      <div className='mx-10 flex flex-col'>
        <h4 className='text-xl font-bold uppercase'>
          HAVE QUESTIONS, OR JUST CURIOUS?
        </h4>
        <p className='text-xl font-bold uppercase'>DROP ME A MESSAGE AT</p>
        <p className='text-xl font-semibold underline uppercase mt-2'>
          monoongs@gmail.com
        </p>
        <div className='flex gap-4 mt-4'>
          <a
            href='https://www.linkedin.com/in/nattapon-srivilai'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={28} className='text-black' />
          </a>
          <a
            href='https://github.com/nattapon-dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={28} className='text-black' />
          </a>
        </div>
        <h5 className='text-4xl uppercase font-bold mt-4'>
          Nattapon Srivithayarat
        </h5>
      </div>
    </div>
  );
}

export default Footer;
