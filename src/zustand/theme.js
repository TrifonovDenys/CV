import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

export const useColorSchemeStore = create(
  persist(
    
      (set) => ({
        currentColorScheme: localStorage.getItem('color-scheme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
        toggleColorScheme: () => {
          set((state) => ({
            currentColorScheme: state.currentColorScheme === 'light' ? 'dark' : 'light',
          }));
        },
      }),
    {
      name: 'theme',
      version: 1,
    },
  ),
);
