import React from 'react';

function CommonContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex items-start flex-col justify-center min-h-screen'>
      {children}
    </div>
  );
}

export default CommonContainer;
