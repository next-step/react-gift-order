import { useState } from "react";
import { type StateHook } from "./stateHookType";

export type useReceiverErrorHandler = {
  receiverValid: StateHook<boolean>;
  phoneNumberValid: StateHook<boolean>;
  quantityValid: StateHook<boolean>;

  receiverReason: StateHook<string | null>;
  phoneNumberReason: StateHook<string | null>;
  quantityReason: StateHook<string | null>;
};

export default function useReceiverErrorHandler() {
  const [receiverValid, setReceiverValid] = useState<boolean>(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState<boolean>(true);
  const [quantityValid, setQuantityValid] = useState<boolean>(true);

  const [receiverReason, setReceiverReason] = useState<string | null>(null);
  const [phoneNumberReason, setPhoneNumberReason] = useState<string | null>(
    null
  );
  const [quantityReason, setQuantityReason] = useState<string | null>(null);
  const hookset = {
    receiverValid: { value: receiverValid, setValue: setReceiverValid },
    phoneNumberValid: {
      value: phoneNumberValid,
      setValue: setPhoneNumberValid
    },
    quantityValid: { value: quantityValid, setValue: setQuantityValid },

    receiverReason: { value: receiverReason, setValue: setReceiverReason },
    phoneNumberReason: {
      value: phoneNumberReason,
      setValue: setPhoneNumberReason
    },
    quantityReason: { value: quantityReason, setValue: setQuantityReason }
  };
  return hookset;
}
