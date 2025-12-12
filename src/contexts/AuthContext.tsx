import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'guru' | 'siswa';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials
const DEMO_USERS = [
  {
    email: 'admin@sman2salatiga.sch.id',
    password: 'admin123',
    user: {
      id: '1',
      name: 'Dr. Siti Rahayu, M.Pd.',
      email: 'admin@sman2salatiga.sch.id',
      role: 'admin' as const,
    },
  },
  {
    email: 'guru@sman2salatiga.sch.id',
    password: 'guru123',
    user: {
      id: '2',
      name: 'Budi Santoso, S.Pd.',
      email: 'guru@sman2salatiga.sch.id',
      role: 'guru' as const,
    },
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('kms_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const found = DEMO_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      setUser(found.user);
      localStorage.setItem('kms_user', JSON.stringify(found.user));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kms_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
