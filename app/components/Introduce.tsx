import Image from 'next/image';

function Introduce() {
  return (
    <div className='flex items-start flex-col justify-center min-h-screen'>
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
          Software Engineer building scalable web applications using modern tech
          stack
        </p>
      </div>
    </div>
  );
}

export default Introduce;
