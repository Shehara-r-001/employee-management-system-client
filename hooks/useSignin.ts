import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { SignupInputs } from '@/app/auth/Models/Signup.model';
import { BASE_URL } from '@/constants/env.constants';
import { IResponse } from '@/models/Response';

const signin = async (signInInputs: SignupInputs) => {
  const response = await axios.post<IResponse<string>>(
    `${BASE_URL}/users/auth/signin`,
    signInInputs
  );

  return response.data;
};

export const useSignIn = () => useMutation(signin);
