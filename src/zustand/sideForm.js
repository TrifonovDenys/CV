import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'

export const useSideFormStore = create(
  persist(
    devtools((set) => ({
      sideForm: false,
      toggleSideForm: () => set(({ sideForm }) => ({ sideForm: !sideForm })),
    }), {
      name: 'sideForm',
    }),
    {
      name: 'sideForm',
      version: 1,
    }
  )
);