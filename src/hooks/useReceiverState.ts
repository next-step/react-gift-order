import { useState } from "react";
import { type StateHook } from "./stateHookType";

export type useReceiverStateHook = {
  receiver: StateHook<string>;
  phoneNumber: StateHook<string>;
  quantity: StateHook<string>;
};

export default function useReceiverState() {
  const [receiver, setReceiver] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("1");

  const hookset = {
    receiver: { value: receiver, setValue: setReceiver },
    phoneNumber: { value: phoneNumber, setValue: setPhoneNumber },
    quantity: { value: quantity, setValue: setQuantity }
  };
  return hookset;
}
