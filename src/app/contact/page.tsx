import React from 'react';
import Image from 'next/image';
import Daffa3 from '@/assets/daffa-3.png';

export default function ContactPage() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <Image src={Daffa3} alt='Daffa Ilhami' className='w-100' />
    </main>
  );
}
