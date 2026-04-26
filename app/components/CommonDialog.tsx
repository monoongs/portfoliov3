import CommonCarousel from '@/app/components/CommonCarousel';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Experience } from '@/app/config';

type CommonDialogProps = Omit<Experience, 'id' | 'highlights'>;

function CommonDialog(props: CommonDialogProps) {
  const { images, title, company, period, years, months, tools, description } =
    props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='rounded-full text-xs font-bold'>
          View Project
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-2xl bg-white'>
        <DialogHeader>
          <DialogTitle>&nbsp;</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          <CommonCarousel slides={images} />
          <div>
            <h2 className='text-lg font-bold'>{company}</h2>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            {[
              { label: 'Period', value: period },
              {
                label: 'Duration',
                value: `${years} years ${months} months`,
              },
              { label: 'Role', value: title },
              {
                label: 'Tools',
                value: tools.join(', '),
              },
            ].map(({ label, value }) => (
              <div key={label} className='flex flex-col gap-1'>
                <span className='text-xs text-muted-foreground'>{label}</span>
                <span className='text-sm font-medium'>{value}</span>
              </div>
            ))}
          </div>

          <p className='text-sm text-muted-foreground leading-relaxed'>
            {description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CommonDialog;
