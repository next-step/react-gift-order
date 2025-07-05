import { useRef, useState } from "react";

import { OrderFormModel } from "@/features/order/model/OrderFormModel";

import type { ValidationErrors } from "@/shared/validations/createValidationDecorator";
import { validate } from "@/shared/validations/validate";

export const useOrder = () => {
    const [validationErrors, setValidationErrors] = useState<ValidationErrors<OrderFormModel>>({});

    const [quantity, setQuantity] = useState<number>(1);

    const onQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const quantity = parseInt(event.target.value);
        setQuantity(quantity);
    };

    const orderRefs = {
        message: useRef<HTMLTextAreaElement>(null),
        senderName: useRef<HTMLInputElement>(null),
        receiverName: useRef<HTMLInputElement>(null),
        receiverPhoneNumber: useRef<HTMLInputElement>(null),
        quantity: useRef<HTMLInputElement>(null),
    };

    const submit = () => {
        const formData = {
            message: orderRefs.message.current?.value || "",
            senderName: orderRefs.senderName.current?.value || "",
            receiverName: orderRefs.receiverName.current?.value || "",
            receiverPhoneNumber: orderRefs.receiverPhoneNumber.current?.value || "",
            quantity: parseInt(orderRefs.quantity.current?.value as string),
        };

        const orderFormModel = new OrderFormModel(
            formData.message,
            formData.senderName,
            formData.receiverName,
            formData.receiverPhoneNumber,
            formData.quantity,
        );

        const errors = validate<OrderFormModel>(orderFormModel);
        setValidationErrors(errors);

        return formData;
    };

    return {
        orderRefs,
        submit,
        validationErrors,
        quantity,
        onQuantityChange,
    };
};
