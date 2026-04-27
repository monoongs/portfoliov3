import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import CommonContainer from '@/app/components/CommonContainer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nattapon Srivithayarat Portfolio',
  description:
    'Software Engineer building scalable web applications using modern tech stack',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col bg-gray-100 overflow-x-hidden'>
        <div className='max-w-3xl mx-auto'>
          <div className='bg-white shadow-[20px_0_25px_-5px_rgb(0_0_0/0.1),-20px_0_25px_-5px_rgb(0_0_0/0.1)] [clip-path:inset(0_-30px)]'>
            <div className='px-10'>
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
