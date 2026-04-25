import Image from 'next/image';
import { differenceInYears } from 'date-fns';
import { Badge } from '@/components/ui/badge';

function Introduce() {
  const today = new Date();
  const startWorkDate = new Date(2018, 8);

  const experience = differenceInYears(today, startWorkDate);
  return (
    <div className='flex flex-col gap-6'>
      <div className='relative w-48 h-48 rounded-full overflow-hidden self-center'>
        <Image
          src='/img/R0000814webp.webp'
          alt='introduce'
          fill
          className='object-cover'
        />
      </div>
      <div>
        <h1 className='text-4xl font-bold'>{`Nattapon
        Srivithayarat`}</h1>
      </div>

      <div className='flex items-center gap-2'>
        <Badge variant='outline'>Nest.js</Badge>
        <Badge variant='outline'>Next.js</Badge>
        <Badge variant='outline'>TypeScript</Badge>
      </div>

      <p className='font-medium uppercase'>
        Software Engineer with {experience}+ years of experience building
        scalable web applications using modern tech stack
      </p>
    </div>
  );
}

export default Introduce;
