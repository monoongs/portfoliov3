import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile } from '@/app/config';

function Footer() {
  return (
    <div className='bg-[#ececed] w-screen -mx-10 py-5'>
      <div className='mx-10 flex flex-col'>
        <h4 className='text-xl font-bold uppercase'>
          HAVE QUESTIONS, OR JUST CURIOUS?
        </h4>
        <p className='text-xl font-bold uppercase'>DROP ME A MESSAGE AT</p>
        <p className='text-xl font-semibold underline uppercase mt-2'>
          {profile.email}
        </p>
        <div className='flex gap-4 mt-4'>
          <a href={profile.linkedin} target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={28} className='text-black' />
          </a>
          <a href={profile.github} target='_blank' rel='noopener noreferrer'>
            <FaGithub size={28} className='text-black' />
          </a>
        </div>
        <h5 className='text-4xl uppercase font-bold mt-4'>{profile.name}</h5>
      </div>
    </div>
  );
}

export default Footer;
