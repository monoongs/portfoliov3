import ProfileDialog from '@/app/components/ProfileDialog';
import Link from 'next/link';

function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-gray-100'>
      <div className='max-w-3xl mx-auto px-10 flex justify-between items-center py-5 bg-white shadow-[20px_0_25px_-5px_rgb(0_0_0/0.1),-20px_0_25px_-5px_rgb(0_0_0/0.1)] [clip-path:inset(0_-30px)]'>
        <div>
          <Link href='/' className='hover:underline'>
            <h1 className='text-md font-bold'>NATTAPON.DEV</h1>
          </Link>
        </div>
        <div>
          <ProfileDialog />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
