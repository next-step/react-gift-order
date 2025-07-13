import { useState } from 'react';

export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return { isOpen, onOpen, onClose };
};
