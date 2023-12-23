import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useModalStore = create((set) => ({
      modal: false,
      toggleModal: () => set(({ modal }) => ({ modal: !modal })),
    })
);
