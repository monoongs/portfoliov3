'use client';

import Image from 'next/image';
import { useState } from 'react';

const slides = ['/images/bedrockjob.webp', '/images/bedrockjob1.webp'];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className='relative w-full'>
      <div className='relative overflow-hidden rounded-lg aspect-video'>
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <Image
              src={src}
              alt={`slide-${i + 1}`}
              fill
              className='object-cover'
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 gap-3'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={prev}
        className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50'>
          <svg
            className='w-5 h-5 text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m15 19-7-7 7-7'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>

      {/* Next */}
      <button
        onClick={next}
        className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50'>
          <svg
            className='w-5 h-5 text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m9 5 7 7-7 7'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
