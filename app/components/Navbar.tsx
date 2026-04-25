import { Button } from '@/components/ui/button';

function Navbar() {
  return (
    <div className='flex justify-between items-center px-8 py-5 fixed top-0 left-0 right-0 z-50 bg-white'>
      <div>
        <h1 className='text-md font-bold'>NATTAPON.DEV</h1>
      </div>
      <div>
        <Button variant='outline' className='rounded-full text-xs font-bold'>
          Get In Touch
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
