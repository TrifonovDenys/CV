import { create } from 'zustand';

export const useBearStore = create((set) => ({
  data: {
    myMail: 'trifonowden123@gmail.com',
    toMail: '',
    subject: '',
    message: '',
  },
  changeData: () => set((state) => ({ subject: state.subject + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
