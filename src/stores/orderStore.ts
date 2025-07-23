
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { ReceiverModelType } from '@/models/OrderFormModel';

interface OrderState {
  receivers: ReceiverModelType[];
  setReceivers: (receivers: ReceiverModelType[]) => void;
  addReceiver: (receiver: ReceiverModelType) => void;
  removeReceiver: (index: number) => void;
  updateReceiver: (index: number, receiver: ReceiverModelType) => void;
}

export const useOrderStore = create<OrderState>()(
  devtools((set) => ({
    receivers: [],
    setReceivers: (receivers) => set({ receivers }),
    addReceiver: (receiver) =>
      set((state) => ({ receivers: [...state.receivers, receiver] })),
    removeReceiver: (index) =>
      set((state) => ({
        receivers: state.receivers.filter((_, i) => i !== index),
      })),
    updateReceiver: (index, receiver) =>
      set((state) => ({
        receivers: state.receivers.map((r, i) => (i === index ? receiver : r)),
      })),
  }))
);
