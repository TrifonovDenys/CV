import React from 'react';
import { create } from 'zustand';

export const useScrollStore = create((set) => ({
  blocks: {
    block1: React.createRef(),
    block2: React.createRef(),
    // Добавьте рефы для остальных блоков по мере необходимости
  },
  scrollToBlock: (blockName) => {
    const ref = blockName && blockName in set().blocks ? set().blocks[blockName] : null;
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  },
}));
