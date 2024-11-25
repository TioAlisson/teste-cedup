'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Image404 from "@/public/img/img-404.jpg"

export default function NotFound() {
  const [counter, setCounter] = useState(5);
  const router = useRouter();

  useEffect(() => {
      const timer = setInterval(() => {
          setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      const timeout = setTimeout(() => {
          router.push('/');
      }, 5000);

      return () => {
          clearInterval(timer);
          clearTimeout(timeout);
      };
  }, [router]);

  return (
    <div className='container mx-auto'>
      <div className='py-20 flex flex-col items-center justify-center'>
        <h1 className="text-2xl font-medium text-primary-400 pt-20 lg:pt-40 text-center lg:text-start">
          Redirecionado para a página inicial em {counter} segundos.
        </h1>
        <Image
          src={Image404}
          alt='Image Not Found'
          className='w-[60%] lg:w-[30%] h-auto my-12 lg:my-6'

        />
        <p className="text-primary-400 text-lg">
          <span className="uppercase mr-2 text-3xl font-bold">Erro</span> A página não existe
        </p>
      </div>
    </div>
  );
}

