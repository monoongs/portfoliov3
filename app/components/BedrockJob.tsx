import Carousel from '@/app/components/Carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const slides = ['/images/bedrockjob.webp', '/images/bedrockjob1.webp'];

function BedrockJob() {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <Carousel slides={slides} />

      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-xl'>Senior Full Stack Developer</h1>
        <h2 className='text-md font-medium'>
          Bedrock Analytics (AI and Robotics Ventures)
        </h2>
        <Badge variant='outline'>
          <h3 className='text-md font-medium'>2024 Jan - 2026 March</h3>
        </Badge>

        <ul className='list-disc pl-4'>
          <li>
            <p>
              Built a multi-tenant government platform with centralized user and
              role management
            </p>
          </li>

          <li>
            <p>
              Implemented async workflows using Kafka, outbox pattern, and
              backend APIs with NestJS and Elysia
            </p>
          </li>

          <li>
            <p>
              Implemented async workflows using Kafka, outbox pattern, and
              backend APIs with NestJS and Elysia
            </p>
          </li>
        </ul>
      </div>

      <Button variant='outline' className='rounded-full text-xs font-bold'>
        View Project
      </Button>
    </div>
  );
}

export default BedrockJob;

{
  /* <div className='flex flex-col gap-6 w-full'></div> */
}
