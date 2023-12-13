import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

export const useModalStore = create(
  persist(
    devtools(
      (set) => ({
        modal: false,
        toggleModal: () => set(({ modal }) => ({ modal: !modal })),
      }),
      {
        name: 'modal',
      },
    ),
    {
      name: 'modal',
      version: 1,
    },
  ),
);
