import ProfileDialog from '@/app/components/ProfileDialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';
import { profile } from '@/app/config';

function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-3xl mx-auto px-10 flex justify-between items-center py-5 bg-white'>
        <div>
          <Link href='/' className='hover:underline'>
            <h1 className='text-md font-bold'>NATTAPON.DEV</h1>
          </Link>
        </div>
        <div className='flex flex-col-reverse items-center gap-3 md:flex-row'>
          <Button
            variant='outline'
            className='group h-8 w-26.25 rounded-full text-xs font-bold bg-black text-white hover:bg-white hover:text-black'
          >
            <Link
              href={profile.cvUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2'
            >
              <FiDownload className='text-white group-hover:text-black' />
              Get My CV
            </Link>
          </Button>

          <ProfileDialog />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
