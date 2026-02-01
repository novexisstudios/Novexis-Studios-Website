import { User } from '../types';

// Accessing environment variables. Note: In a pure ESM/importmap environment without a build step, 
// these are often managed via a config fetch or global injection. 
// For standard Vite/Netlify workflows, we use import.meta.env.
const ADMIN_CREDENTIALS = {
  email: (import.meta as any).env?.VITE_ADMIN_EMAIL || 'novexisstudios@gmail.com',
  password: (import.meta as any).env?.VITE_ADMIN_PASSWORD || 'Novexisr0cks@123'
};

export const login = (email: string, pass: string): User | null => {
  if (email === ADMIN_CREDENTIALS.email && pass === ADMIN_CREDENTIALS.password) {
    const user: User = { id: 'admin_1', email, role: 'admin' };
    localStorage.setItem('novexis_user', JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem('novexis_user');
};

export const getCurrentUser = (): User | null => {
  const data = localStorage.getItem('novexis_user');
  return data ? JSON.parse(data) : null;
};