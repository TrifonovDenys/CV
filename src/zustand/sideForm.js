import { create } from 'zustand';
import { persist } from 'zustand/middleware'

export const useSideFormStore = create(
  persist(
    (set) => ({
      sideForm: false,
      toggleSideForm: () => set(({ sideForm }) => ({ sideForm: !sideForm })),
    }),
    {
      name: 'sideForm',
      version: 1,
    }
  )
);