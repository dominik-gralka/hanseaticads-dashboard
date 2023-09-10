import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';
import React from 'react';

import SessionProvider from './components/SessionProvider';
import { getServerSession } from 'next-auth';

export const metadata = {
  title: 'Hanseatic Ads | Dashboard',
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession();

  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        <SessionProvider session={session}>{children}</SessionProvider>
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}
