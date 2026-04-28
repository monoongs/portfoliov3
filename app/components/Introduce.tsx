import Image from 'next/image';
import { differenceInYears } from 'date-fns';
import { Badge } from '@/components/ui/badge';

function Introduce() {
  const today = new Date();
  const startWorkDate = new Date(2018, 8);

  const experience = differenceInYears(today, startWorkDate);
  const widthForResponsive = {
    base: 'w-48 h-48',
    lg: 'lg:w-55 lg:h-55',
  };
  return (
    <div className='flex items-start flex-col justify-center min-h-screen'>
      <div className='flex flex-col gap-6 lg:gap-7'>
        <div
          className={`relative ${widthForResponsive.base} ${widthForResponsive.lg} rounded-full overflow-hidden self-center`}
        >
          <Image
            src='/images/R0000814webp.webp'
            alt='introduce'
            fill
            className='object-cover'
          />
        </div>
        <div className='md:self-center flex flex-col'>
          <h1 className='text-4xl font-bold'>{`Nattapon
        Srivithayarat`}</h1>

          <div className='flex items-center gap-2 md:self-center my-4 text-base'>
            <Badge variant='outline'>Nest.js</Badge>
            <Badge variant='outline'>Next.js</Badge>
            <Badge variant='outline'>TypeScript</Badge>
          </div>
        </div>

        <p className='font-medium uppercase'>
          Software Engineer with {experience}+ years of experience building
          scalable web applications using modern tech stack
        </p>
      </div>
    </div>
  );
}

export default Introduce;
