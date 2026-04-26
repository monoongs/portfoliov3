import Image from 'next/image';
import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

function CommonCarousel({
  slides,
  className,
}: {
  slides: string[];
  className?: string;
}) {
  return (
    <CarouselUI className={cn('w-full', className)}>
      <CarouselContent>
        {slides.map((src, i) => (
          <CarouselItem key={i}>
            <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
              <Image
                src={src}
                alt={`slide-${i + 1}`}
                fill
                className='object-cover'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-4' />
      <CarouselNext className='right-4' />
    </CarouselUI>
  );
}

export default CommonCarousel;
