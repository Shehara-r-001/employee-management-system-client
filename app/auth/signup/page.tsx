'use client';

import React from 'react';

import { Auth } from '@/components/auth';

const SignupPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div
        className='hidden lg:inline lg:w-[70vw] lg:bg-center lg:bg-cover lg:h-[100vh]'
        style={{
          backgroundImage:
            'url("https://i.ibb.co/fpSXrMv/pexels-life-of-pix-7974.jpg")',
        }}
      ></div>
      <Auth />
    </div>
  );
};

export default SignupPage;
