import { useCallback } from 'react';
import { useRouter } from 'next/router';

export default (path) => {
  const router = useRouter();

  return useCallback(() => router.push(path), [path, router]);
};
