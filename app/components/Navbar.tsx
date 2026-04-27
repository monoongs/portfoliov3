import ProfileDialog from '@/app/components/ProfileDialog';
import Link from 'next/link';

function Navbar() {
  return (
    <div className='flex justify-between items-center px-8 py-5 fixed top-0 left-0 right-0 z-50 bg-white'>
      <div>
        <Link href='/' className='hover:underline'>
          <h1 className='text-md font-bold'>NATTAPON.DEV</h1>
        </Link>
      </div>
      <div>
        <ProfileDialog />
      </div>
    </div>
  );
}

export default Navbar;
