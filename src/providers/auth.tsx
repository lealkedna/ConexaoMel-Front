"use client"

import { createContext, useEffect, useState, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';
import { getCookieClient } from '@/lib/cookiesClient';
import { usePathname } from 'next/navigation';

interface User {
  sub: string;
  name?: string;
  email?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const token = getCookieClient();

    if (token && typeof token === 'string') {
      try {
        const decoded = jwtDecode<User>(token);
        setUser(decoded);
        setIsAuthenticated(true);
      } catch (err) {
        console.error('Erro ao decodificar o token:', err);
        setIsAuthenticated(false);
      }
    }
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user}}>
      {children}
    </AuthContext.Provider>
  );
}
