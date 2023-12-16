import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { AppBar } from '@components/appbar';
import './globals.css';

const lufga = localFont({
  src: [
    {
      path: './fonts/lufga-thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/lufga-thinitalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/lufga-extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/lufga-extralightitalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/lufga-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/lufga-lightitalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/lufga-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/lufga-italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/lufga-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/lufga-mediumitalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/lufga-semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/lufga-semibolditalic.otf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-lufga',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lufga.variable} font-sans`}>
      <Head>
        <title>Work-Life Balance App</title>
        <meta
          name="description"
          content="App for work-life balance and mood-based playlist selection"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-bg text-text min-h-screen">
        <AppBar
          logo={
            <Link href="/">
              <div className="flex gap-1">
                <Image
                  src="/assets/wave.svg"
                  height={24}
                  width={24}
                  alt="note"
                  className="-mt-1"
                />
                MoodSync
              </div>
            </Link>
          }
          elements={[
            {
              slug: '/music',
              element: (
                <Image
                  src="/assets/note.svg"
                  alt="note"
                  width={22}
                  height={22}
                />
              ),
            },
            {
              slug: '/user',
              element: (
                <Image
                  src="/assets/pfp.png"
                  alt="avatar"
                  width={60}
                  height={60}
                  className="-mb-2.5"
                />
              ),
            },
          ]}
        />
        {children}

        <footer className="w-full h-16 flex items-center justify-center border-t mt-4">
          <p className="text-sm">Made with ♥ Mood Sync</p>
        </footer>
      </body>
    </html>
  );
}
