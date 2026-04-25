import Carousel from '@/app/components/Carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { differenceInYears, differenceInMonths } from 'date-fns';

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

      <BedrockDialog />
    </div>
  );
}

function BedrockDialog() {
  const startDate = new Date('2024-01-01');
  const endDate = new Date('2026-03-31');

  const years = differenceInYears(endDate, startDate);
  const months = differenceInMonths(endDate, startDate);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='rounded-full text-xs font-bold'>
          View Project
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-2xl bg-white'>
        <DialogHeader>
          <DialogTitle>
            &nbsp;
            {/* <span className='text-md font-bold'>
              Bedrock Analytics (AI and Robotics Ventures)
            </span> */}
          </DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          <Carousel slides={slides} />
          <div>
            <h2 className='text-lg font-bold'>
              Bedrock Analytics (AI and Robotics Ventures)
            </h2>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            {[
              { label: 'Period', value: '2024 Jan - 2026 March' },
              {
                label: 'Duration',
                value: `${years} years ${months % 12} months`,
              },
              { label: 'Role', value: 'Senior Full Stack Developer' },
              {
                label: 'Tools',
                value: 'Next.js, NestJS, Elysia, PostgreSQL, Redis, Kafka',
              },
            ].map(({ label, value }) => (
              <div key={label} className='flex flex-col gap-1'>
                <span className='text-xs text-muted-foreground'>{label}</span>
                <span className='text-sm font-medium'>{value}</span>
              </div>
            ))}
          </div>

          <p className='text-sm text-muted-foreground leading-relaxed'>
            LocalGov is a multi-tenant web portal for government organizations,
            supporting RBAC management and integration with multiple internal
            services. Built with Next.js, Elysia, PostgreSQL, Redis, and Kafka —
            responsible for both frontend and backend, including feature
            development, asynchronous workflows, and cross-system integration.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default BedrockJob;
