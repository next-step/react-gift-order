import useFormInput from "@/hook/useFormInput";
import { validateName, validatePhone, validateQuantity } from "@/utils/validateInput";
import React, { createContext, useContext, useState } from "react";

interface OrderContextType {
    senderNameInput: ReturnType<typeof useFormInput>;
    recipientNameInput: ReturnType<typeof useFormInput>;
    recipientPhoneInput: ReturnType<typeof useFormInput>;
    quantityInput: ReturnType<typeof useFormInput>;
    cardMessage : string
    setCardMessage : (msg:string) => void
}

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderContextProvider = ({ children }: { children: React.ReactNode }) => {
    const senderNameInput = useFormInput(validateName)
    const recipientNameInput = useFormInput(validateName)
    const recipientPhoneInput = useFormInput(validatePhone)
    const quantityInput = useFormInput(validateQuantity, '1')
    const [cardMessage, setCardMessage] = useState('축하해요.');
return (
    <OrderContext.Provider
        value={{
            senderNameInput,
            recipientNameInput,
            recipientPhoneInput,
            quantityInput,
            cardMessage, 
            setCardMessage
        }}
    >
        {children}
    </OrderContext.Provider>
)
}

export const useOrder = () =>{
    const context = useContext(OrderContext)
    if(!context){
        throw new Error('useOrfer 은 <OrderProvider> 에서만 써야 합니다')
    }

    return context;
}

