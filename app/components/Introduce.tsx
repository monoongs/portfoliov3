import Image from 'next/image';
import { differenceInYears } from 'date-fns';

function Introduce() {
  const today = new Date();
  const startWorkDate = new Date(2018, 8);

  const experience = differenceInYears(today, startWorkDate);
  return (
    <>
      <div className='relative w-48 h-48 rounded-full overflow-hidden self-center'>
        <Image
          src='/img/R0000814webp.webp'
          alt='introduce'
          fill
          className='object-cover'
        />
      </div>
      <div className='my-10'>
        <h1 className='text-4xl font-bold'>{`Nattapon
        Srivithayarat`}</h1>
      </div>

      <div className='flex items-center justify-center'>
        <p className='text-left font-medium uppercase'>
          Software Engineer with {experience}+ years of experience building
          scalable web applications using modern tech stack
        </p>
      </div>

      <div className='flex items-center justify-center pt-5'>
        <p className='text-left font-medium uppercase italic'>
          <span className='font-light underline'>Nest.js</span> |{' '}
          <span className='font-light underline'>Next.js</span> |{' '}
          <span className='font-light underline'>TypeScript</span>
        </p>
      </div>
    </>
  );
}

export default Introduce;
