'use client';

import { useState, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const Providers = ({ children }: PropsWithChildren) => {
  const [client] = useState(new QueryClient()); // ! check this

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
