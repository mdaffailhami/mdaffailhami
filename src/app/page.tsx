import React from 'react';
import Image from 'next/image';
import HeroPicture from '@/assets/daffa-1.png';

export default function HomePage() {
  return (
    <main className='mx-auto flex min-h-screen max-w-7xl flex-row flex-wrap-reverse items-center justify-center space-x-10'>
      <section className='flex max-w-1/2 flex-col'>
        <h1 className='text-7xl'>Daffa Ilhami</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          exercitationem repudiandae quod praesentium neque omnis! Veritatis,
          voluptas placeat, dolore tempore accusantium amet earum fugiat quae,
          saepe at aut delectus totam.
        </p>
      </section>
      <section className='h-min w-[400px]'>
        <Image
          src={HeroPicture}
          alt='Daffa Ilhami'
          className='w-100 rounded-full'
        />
      </section>
    </main>
  );
}
