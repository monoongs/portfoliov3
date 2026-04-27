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
  const valid = slides.filter(Boolean);
  if (valid.length === 0) return null;
  return valid.length > 1 ? (
    <CommonCarouselMulti slides={valid} className={className} />
  ) : (
    <CommonCarouselSingle src={valid[0]} className={className} />
  );
}

function CommonCarouselSingle({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
      <Image
        src={src}
        alt={`slide-1`}
        fill
        className={cn('object-contain', className)}
      />
    </div>
  );
}

function CommonCarouselMulti({
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
                className='object-contain'
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
