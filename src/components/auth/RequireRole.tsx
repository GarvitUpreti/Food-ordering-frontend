'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Role } from '@/types/auth.types';
import { useAuth } from '@/context/AuthContext';

interface Props {
  allowed: Role[];
  children: ReactNode;
}

export default function RequireRole({ allowed, children }: Props) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || !allowed.includes(user.role))) {
      router.replace('/dashboard');
    }
  }, [user, loading, allowed, router]);

  if (loading || !user) return null;

  return <>{children}</>;
}
