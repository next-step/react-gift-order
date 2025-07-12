import React, { useState } from 'react';
import { ReceiverContext } from './ReceiverContext';
import type { ReceiverInfo } from './ReceiverContext';

interface ReceiverProviderProps {
    children: React.ReactNode;
}

export const ReceiverProvider = ({ children }: ReceiverProviderProps) => {
    const [receiverList, setReceiverList] = useState<ReceiverInfo[]>([]);
    const updateReceiverList = (newList: ReceiverInfo[]) => setReceiverList(newList);

  return (
    <ReceiverContext.Provider value={{ receiverList, updateReceiverList }}>
      {children}
    </ReceiverContext.Provider>
  );
}