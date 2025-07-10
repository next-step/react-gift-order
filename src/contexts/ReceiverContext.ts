import { createContext, useContext} from "react";
import { z } from 'zod';
import { receiverSchema } from '@/utils/validation/orderFormSchema';

export type ReceiverInfo = z.infer<typeof receiverSchema>;

interface ReceiverContextType {
    receiverList: ReceiverInfo[];
    updateReceiverList: (newList: ReceiverInfo[]) => void;
}

export const ReceiverContext = createContext<ReceiverContextType | null>(null);

export const useReceiver = () => {
    const context = useContext(ReceiverContext);
    if (!context) {
        throw new Error('ReceiverContext 내부사용 필요');
    }
    return context;
}
