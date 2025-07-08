import { useReceiverNameInput } from "./receiverInput/useReceiverNameInput";
import { useReceiverPhoneInput } from "./receiverInput/useReceiverPhoneInput";
import { useReceiverQuantityInput } from "./receiverInput/useReceiverQuantityInput";

export function useReceiverInput() {
  const {
    receiverName,
    onReceiverNameChange,
    onValidateReceiverName,
    receiverNameErrorMessage,
  } = useReceiverNameInput();

  const {
    receiverPhone,
    onReceiverPhoneChange,
    onValidateReceiverPhone,
    receiverPhoneErrorMessage,
  } = useReceiverPhoneInput();

  const {
    quantity,
    onQuantityChange,
    onValidateQuantity,
    quantityErrorMessage,
  } = useReceiverQuantityInput();

  return {
    receiverName,
    onReceiverNameChange,
    onValidateReceiverName,
    receiverNameErrorMessage,

    receiverPhone,
    onReceiverPhoneChange,
    onValidateReceiverPhone,
    receiverPhoneErrorMessage,

    quantity,
    onQuantityChange,
    onValidateQuantity,
    quantityErrorMessage,
  };
}
