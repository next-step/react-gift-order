import { useReceiverNameInput } from "./receiverInput/useReceiverNameInput";
import { useReceiverPhoneInput } from "./receiverInput/useReceiverPhoneInput";
import { useReceiverQuantityInput } from "./receiverInput/useReceiverQuantityInput";

export function useReceiverInput() {
  const {
    receiverName,
    handleReceiverNameChange,
    validateReceiverName,
    receiverNameErrorMessage,
    hasReceiverNameError,
  } = useReceiverNameInput();

  const {
    receiverPhone,
    handleReceiverPhoneChange,
    validateReceiverPhone,
    receiverPhoneErrorMessage,
    hasReceiverPhoneError,
  } = useReceiverPhoneInput();

  const {
    quantity,
    handleQuantityChange,
    validateQuantity,
    quantityErrorMessage,
    hasQuantityError,
  } = useReceiverQuantityInput();

  return {
    receiverName,
    handleReceiverNameChange,
    validateReceiverName,
    receiverNameErrorMessage,
    hasReceiverNameError,

    receiverPhone,
    handleReceiverPhoneChange,
    validateReceiverPhone,
    receiverPhoneErrorMessage,
    hasReceiverPhoneError,

    quantity,
    handleQuantityChange,
    validateQuantity,
    quantityErrorMessage,
    hasQuantityError,
  };
}
