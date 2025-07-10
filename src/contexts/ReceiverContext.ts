import { createContext, useContext} from "react";

export interface ReceiverInfo {
    name: string;
    phone: string;
    address: string;
}

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
