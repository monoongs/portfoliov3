import { experience } from '@/app/config';
import CommonCarousel from '@/app/components/CommonCarousel';
import { notFound } from 'next/navigation';
import BackButton from '@/app/components/BackButton';

async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = experience[projectId];

  if (!project) notFound();

  const {
    images,
    title,
    company,
    period,
    years,
    months,
    tools,
    description,
    responsibilities,
  } = project;

  return (
    <div className='flex flex-col gap-6 w-full max-w-2xl mx-auto pt-28 pb-10'>
      <CommonCarousel slides={images} />

      <div>
        <h1 className='text-lg font-bold'>{company}</h1>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        {[
          { label: 'Period', value: period },
          { label: 'Duration', value: `${years} years ${months} months` },
          { label: 'Role', value: title },
          { label: 'Tools', value: tools.join(', ') },
        ].map(({ label, value }) => (
          <div key={label} className='flex flex-col gap-1'>
            <span className='text-xs text-muted-foreground'>{label}</span>
            <span className='text-sm font-medium'>{value}</span>
          </div>
        ))}
      </div>

      <p className='text-sm'>{description}</p>

      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-semibold'>Responsibilities</h3>
        <ul className='list-disc pl-4'>
          {responsibilities.map((item, i) => (
            <li key={i}>
              <p className='text-sm'>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <BackButton />
    </div>
  );
}

export default ProjectPage;
