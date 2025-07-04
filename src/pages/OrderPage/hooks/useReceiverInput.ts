import { useState } from "react";

export function useReceiverInput() {
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [quantity, setQuantity] = useState("1");

  const handleReceiverNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiverName(e.target.value);
  };

  const handleReceiverPhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReceiverPhone(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  return {
    receiverName,
    receiverPhone,
    quantity,
    handleReceiverNameChange,
    handleReceiverPhoneChange,
    handleQuantityChange,
  };
}
