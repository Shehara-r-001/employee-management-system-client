import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';

import { SignupInputs } from '@/app/auth/Models/Signup.model';
import { emailRegex } from '@/utils/regex';
import { useSignIn } from '@/hooks/useSignin';

export const Auth: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>();

  const signInMutation = useSignIn();
  const { isLoading, isError } = signInMutation;

  const onSubmit: SubmitHandler<SignupInputs> = async (data) => {
    await signInMutation.mutateAsync(data);
  };

  return (
    <div className='w-full lg:w-[30vw] flex justify-center bg-white'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='h-[100vh] w-2/3 px-4 space-y-6 flex flex-col justify-center items-end '
      >
        <div className='space-y-2 w-full '>
          <div className='input_cont'>
            <label htmlFor='email' className='input_label'>
              Email
            </label>
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
          <div className='input_cont w-full'>
            <label htmlFor='password' className='input_label'>
              Password
            </label>
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

        <button className='btn_signup '>
          {isLoading ? (
            <ImSpinner2 className='m-auto animate-spin' />
          ) : (
            'SignUp'
          )}
        </button>
      </form>
    </div>
  );
};
