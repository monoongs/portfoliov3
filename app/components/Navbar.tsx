import React from 'react';

function Navbar() {
  return (
    <div className='flex justify-between items-center px-8 py-5 fixed top-0 left-0 right-0 z-50 bg-white'>
      <div>
        <h1 className='text-md font-bold'>NATTAPON.DEV</h1>
      </div>
      <div>
        <button className='border-2 border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>
          <h2 className='text-xs font-bold'>Get In Touch</h2>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
