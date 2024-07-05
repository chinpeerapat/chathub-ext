import { FetchError } from 'ofetch';
import useSWR from 'swr';

function mockValidatePremium() {
  return { valid: true };
}

export function usePremium() {
  const validationQuery = useSWR<{ valid: true } | { valid: false; error?: string }>(
    'premium-validation',
    async () => {
      return mockValidatePremium();
    },
    {
      fallbackData: { valid: true },
      revalidateOnFocus: false,
      dedupingInterval: 10 * 60 * 1000,
    },
  );

  return {
    activated: true,
    isLoading: validationQuery.isLoading,
    error: undefined,
  };
}