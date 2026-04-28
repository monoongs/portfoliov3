import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { profile } from '@/app/config';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';
import Link from 'next/link';

function ProfileDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='rounded-full text-xs font-bold'>
          Get In Touch
        </Button>
      </DialogTrigger>
      <DialogContent
        className='bg-white md:max-w-2xl'
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle>&nbsp;</DialogTitle>
        </DialogHeader>
        <ProfileContent />
      </DialogContent>
    </Dialog>
  );
}

function ProfileContent() {
  const iconSize = 40;
  return (
    <div className='flex flex-col'>
      <div className='flex mt-5 gap-8 justify-center md:gap-10'>
        <div className='flex flex-col items-center gap-1'>
          <Link href={profile.cvUrl} target='_blank' rel='noopener noreferrer'>
            <FiDownload size={iconSize} className='text-black' />
          </Link>
          <span className='text-xs font-bold uppercase'>Get my CV</span>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <Link href={`mailto:${profile.email}`}>
            <FiMail size={iconSize} className='text-black' />
          </Link>
          <span className='text-xs font-bold uppercase'>Email</span>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <Link
            href={profile.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={iconSize} className='text-black' />
          </Link>
          <span className='text-xs font-bold uppercase'>LinkedIn</span>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <Link href={profile.github} target='_blank' rel='noopener noreferrer'>
            <FaGithub size={iconSize} className='text-black' />
          </Link>
          <span className='text-xs font-bold uppercase'>Github</span>
        </div>
      </div>
      <div className='flex md:justify-center'>
        <h5 className='text-4xl uppercase font-bold mt-5'>{profile.name}</h5>
      </div>
    </div>
  );
}

export default ProfileDialog;
