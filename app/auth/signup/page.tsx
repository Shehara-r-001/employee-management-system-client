'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { emailRegex } from '@/utils/regex';
import { SignupInputs } from '../Models/Signup.model';
import { useSignUp } from '@/hooks/useSignup';

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>();

  const signUpMutation = useSignUp();

  const onSubmit: SubmitHandler<SignupInputs> = async (data) => {
    await signUpMutation.mutateAsync(data);
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='h-[40vh] px-4 space-y-6 flex flex-col justify-center items-end shadow-md rounded-md hover:shadow-lg transition-shadow duration-200 bg-white'
      >
        <div className='space-y-2'>
          <div className='input_cont'>
            <label htmlFor='email'>Email:</label>
            <input
              {...register('email', { required: true, pattern: emailRegex })}
              className='input'
            />
            {errors.email && (
              <span className='input_error'>
                Email should be a valid email address.
              </span>
            )}
          </div>
          <div className='input_cont'>
            <label htmlFor='password'>Password:</label>
            <input
              {...register('password', { required: true, minLength: 6 })}
              className='input'
            />
            {errors.password && (
              <span className='input_error'>
                Password should be atleast 6 characters.
              </span>
            )}
          </div>
        </div>

        <button className='btn_signup'>Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
