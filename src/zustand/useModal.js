import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useModalStore = create(
  devtools(
    (set) => ({
      modal: false,
      toggleModal: () => set(({ modal }) => ({ modal: !modal })),
    }),
    {
      name: 'modal',
    },
  ),
);
