import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useModalStore = create(
  devtools(
    (set) => ({
      modal: false,
      title: '',
      content: [],
      openModal: (title, content) =>
        set(({ modal }) => ({
          modal: !modal,
          title: title,
          content: content,
        })),
      closeModal: () =>
        set(({ modal }) => ({
          modal: !modal,
        })),
    }),
    'modalStore',
  ),
);
