import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { SignupInputs } from '@/app/auth/Models/Signup.model';
import { IResponse } from '@/Models/Response';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const signUp = async (signupInputs: SignupInputs) => {
  const response = await axios.post<IResponse<string>>(
    `${BASE_URL}/users/admin/signup`,
    signupInputs
  );
  return response.data;
};

export const useSignUp = () => {
  return useMutation(signUp);
};
