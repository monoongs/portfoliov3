import CommonContainer from '@/app/components/CommonContainer';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CommonContainer>{children}</CommonContainer>;
}
