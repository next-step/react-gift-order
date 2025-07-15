import { createContext, useContext, type PropsWithChildren, useState } from "react";

import type { ReceiversModelType } from "@/features/order/model/receiverSchema";

export const ReceiverContext = createContext<{
    state: ReceiversModelType;
    setState: React.Dispatch<React.SetStateAction<ReceiversModelType>>;
} | null>(null);

export const ReceiverContextProvider = ({ children }: PropsWithChildren) => {
    const [state, setState] = useState<ReceiversModelType>({
        receivers: [],
    });

    return (
        <ReceiverContext.Provider
            value={{
                state,
                setState,
            }}
        >
            {children}
        </ReceiverContext.Provider>
    );
};

export const useReceiverContext = () => {
    const context = useContext(ReceiverContext);

    if (!context) {
        throw new Error("useReceiverContext는 ReceiverContextProvider 내에서 사용해야 합니다.");
    }

    return context;
};
