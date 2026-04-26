import { experience as Config } from '@/app/config';
import CommonCarousel from '@/app/components/CommonCarousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type CommonExperienceProps = {
  experienceId: string;
};

function CommonExperience({ experienceId }: CommonExperienceProps) {
  const experience = Config[experienceId];

  const slides = experience.images;

  return (
    <div className='flex items-start flex-col justify-center min-h-screen'>
      <div className='flex flex-col gap-6 w-full'>
        <CommonCarousel slides={slides} />

        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-xl'>{experience.title}</h1>
          <h2 className='text-md font-medium'>{experience.company}</h2>
          <Badge variant='outline'>
            <h3 className='text-md font-medium'>{experience.period}</h3>
          </Badge>

          <ul className='list-disc pl-4'>
            {experience.highlights.map((highlight, i) => (
              <li key={i}>
                <p>{highlight}</p>
              </li>
            ))}
          </ul>
        </div>

        <Link href={`/projects/${experience.id}`}>
          <Button
            variant='outline'
            className='rounded-full text-xs font-bold w-full'
          >
            View Project
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CommonExperience;
