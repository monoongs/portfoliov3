'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Button
      variant='outline'
      className={`rounded-full text-xs font-bold ${className}`}
      onClick={() => router.back()}
    >
      Back
    </Button>
  );
}

export default BackButton;
