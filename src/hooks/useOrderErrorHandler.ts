import { useState } from "react";
import { type StateHook } from "./stateHookType";

export type useOrderErrorHandlerHook = {
  messegeValid: StateHook<boolean>;
  senderValid: StateHook<boolean>;
  receiverValid: StateHook<boolean>;
  phoneNumberValid: StateHook<boolean>;
  quantityValid: StateHook<boolean>;

  messegeReason: StateHook<string | null>;
  senderReason: StateHook<string | null>;
  receiverReason: StateHook<string | null>;
  phoneNumberReason: StateHook<string | null>;
  quantityReason: StateHook<string | null>;
};

export default function useOrderErrorHandler() {
  const [messegeValid, setMessegeValid] = useState<boolean>(true);
  const [senderValid, setSenderValid] = useState<boolean>(true);
  const [receiverValid, setReceiverValid] = useState<boolean>(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState<boolean>(true);
  const [quantityValid, setQuantityValid] = useState<boolean>(true);

  const [messegeReason, setMessegeReason] = useState<string | null>(null);
  const [senderReason, setSenderReason] = useState<string | null>(null);
  const [receiverReason, setReceiverReason] = useState<string | null>(null);
  const [phoneNumberReason, setPhoneNumberReason] = useState<string | null>(
    null
  );
  const [quantityReason, setQuantityReason] = useState<string | null>(null);
  const hookset = {
    messegeValid: { value: messegeValid, setValue: setMessegeValid },
    senderValid: { value: senderValid, setValue: setSenderValid },
    receiverValid: { value: receiverValid, setValue: setReceiverValid },
    phoneNumberValid: {
      value: phoneNumberValid,
      setValue: setPhoneNumberValid
    },
    quantityValid: { value: quantityValid, setValue: setQuantityValid },

    messegeReason: { value: messegeReason, setValue: setMessegeReason },
    senderReason: { value: senderReason, setValue: setSenderReason },
    receiverReason: { value: receiverReason, setValue: setReceiverReason },
    phoneNumberReason: {
      value: phoneNumberReason,
      setValue: setPhoneNumberReason
    },
    quantityReason: { value: quantityReason, setValue: setQuantityReason }
  };
  return hookset;
}
