import { getMessageError, getNameError, getPhoneError, getQuantityError } from "@/utils/errorMessage";
import { useState, type ChangeEvent } from "react";

type UseOrderType = {
  sender: string;
  recipients: RecipientType;
  message: string;
};
type RecipientType = {
  name: string;
  phone: string;
  quantity: number;
};
type OrderErrorType = {
  sender: string | null;
  recipients: { [K in keyof RecipientType]: string | null };
  message: string | null;
};
type InputEventType = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;

const defaultValue = {
  sender: "",
  recipients: { name: "", phone: "", quantity: 1 },
  message: "",
};
const defaultErrorValue = {
  sender: null,
  recipients: { index: "", name: null, phone: null, quantity: null },
  message: null,
};

const useOrder = (initialValue: UseOrderType = defaultValue) => {
  const [formData, setFormData] = useState(initialValue);
  const [errorMsg, setErrorMsg] = useState<OrderErrorType>(defaultErrorValue);

  const onChangeOrder = (event: InputEventType) => {
    const { name, value } = event.target;
    if (name === "message" || name === "sender") {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else if (name === "name" || name === "phone") {
      updateRecipient(name, value);
    } else if (name === "quantity") {
      updateRecipient(name, Number(value));
    }
    resetErrorMsg(name);
  };

  const setOrderMessage = (value: string) => {
    setFormData((prevData) => ({ ...prevData, message: value }));
  };

  const updateRecipient = (field: keyof RecipientType, value: string | number) => {
    setFormData((prevData) => ({
      ...prevData,
      recipients: {
        ...prevData.recipients,
        [field]: value,
      },
    }));
  };

  const checkValidOrder = () => {
    const messageError = getMessageError(formData.message);
    const senderError = getNameError(formData.sender);
    const recipientsError = {
      name: getNameError(formData.recipients.name),
      phone: getPhoneError(formData.recipients.phone),
      quantity: getQuantityError(formData.recipients.quantity),
    };
    setErrorMsg({
      message: messageError,
      sender: senderError,
      recipients: recipientsError,
    });

    return (
      messageError === null &&
      senderError === null &&
      recipientsError.name === null &&
      recipientsError.phone === null &&
      recipientsError.quantity === null
    );
  };

  const resetErrorMsg = (name: string) => {
    if (name === "message" || name === "sender") {
      setErrorMsg((prevData) => ({ ...prevData, [name]: "" }));
    } else {
      setErrorMsg((prevData) => ({ ...prevData, recipients: { ...prevData.recipients, [name]: "" } }));
    }
  };
  return {
    formData,
    onChangeOrder,
    setOrderMessage,
    errorMsg,
    checkValidOrder,
  };
};

export default useOrder;
