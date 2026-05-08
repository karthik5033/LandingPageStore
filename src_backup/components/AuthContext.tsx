'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  userName: string | null;
  login: () => void;
  signup: (name: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  userName: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('atelier_auth');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setIsLoggedIn(true);
        setUserName(data.name || 'Guest');
      } catch {
        // Invalid data, ignore
      }
    }
    setHydrated(true);
  }, []);

  const login = () => {
    const existing = localStorage.getItem('atelier_auth');
    if (existing) {
      try {
        const data = JSON.parse(existing);
        setUserName(data.name || 'Guest');
      } catch {
        setUserName('Guest');
      }
    } else {
      localStorage.setItem('atelier_auth', JSON.stringify({ name: 'Guest', email: '' }));
      setUserName('Guest');
    }
    setIsLoggedIn(true);
  };

  const signup = (name: string, email: string) => {
    localStorage.setItem('atelier_auth', JSON.stringify({ name, email }));
    setIsLoggedIn(true);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem('atelier_auth');
    setIsLoggedIn(false);
    setUserName(null);
  };

  // Don't render children until hydrated to avoid flash
  if (!hydrated) return null;

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
