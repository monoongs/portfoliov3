import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile } from '@/app/config';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

function Footer() {
  return (
    <div className='bg-[#ececed] w-screen -mx-10 py-5'>
      <div className='mx-10 flex flex-col'>
        <h4 className='text-xl font-bold uppercase'>Want to work together ?</h4>
        <p className='text-xl font-bold uppercase'>Let&apos;s talk at</p>
        <a
          href={`mailto:${profile.email}`}
          className='text-xl font-semibold underline uppercase mt-2'
        >
          {profile.email}
        </a>
        <div className='flex gap-4 mt-5 items-center'>
          <Button variant='outline' className='rounded-full text-xs font-bold'>
            <FiDownload size={16} /> GET MY CV
          </Button>

          <div className='w-px h-6 bg-gray-500' />

          <Button
            variant='outline'
            className='rounded-full text-xs font-bold'
            asChild
          >
            <a
              href={profile.linkedin}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin size={16} className='text-black' />
            </a>
          </Button>

          <Button
            variant='outline'
            className='rounded-full text-xs font-bold'
            asChild
          >
            <a href={profile.github} target='_blank' rel='noopener noreferrer'>
              <FaGithub size={16} className='text-black' />
            </a>
          </Button>
        </div>

        <h5 className='text-4xl uppercase font-bold mt-5'>{profile.name}</h5>
      </div>
    </div>
  );
}

export default Footer;
