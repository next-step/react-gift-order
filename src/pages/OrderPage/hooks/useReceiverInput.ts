import { useReceiverNameInput } from "./receiverInput/useReceiverNameInput";
import { useReceiverPhoneInput } from "./receiverInput/useReceiverPhoneInput";
import { useReceiverQuantityInput } from "./receiverInput/useReceiverQuantityInput";

export function useReceiverInput() {
  const {
    receiverName,
    handleReceiverNameChange,
    validateReceiverName,
    receiverNameErrorMessage,
  } = useReceiverNameInput();

  const {
    receiverPhone,
    handleReceiverPhoneChange,
    validateReceiverPhone,
    receiverPhoneErrorMessage,
  } = useReceiverPhoneInput();

  const {
    quantity,
    handleQuantityChange,
    validateQuantity,
    quantityErrorMessage,
  } = useReceiverQuantityInput();

  return {
    receiverName,
    handleReceiverNameChange,
    validateReceiverName,
    receiverNameErrorMessage,

    receiverPhone,
    handleReceiverPhoneChange,
    validateReceiverPhone,
    receiverPhoneErrorMessage,

    quantity,
    handleQuantityChange,
    validateQuantity,
    quantityErrorMessage,
  };
}
