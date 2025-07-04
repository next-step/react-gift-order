import { useState } from "react";
import { type StateHook } from "./stateHookType";

export type useOrderStateHook = {
  message: StateHook<string>;
  sender: StateHook<string>;
  receiver: StateHook<string>;
  phoneNumber: StateHook<string>;
  quantity: StateHook<string>;
};

export default function useOrderState() {
  const [message, setMessage] = useState<string>("");
  const [sender, setSender] = useState<string>("");
  const [receiver, setReceiver] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("1");

  const hookset = {
    message: { value: message, setValue: setMessage },
    sender: { value: sender, setValue: setSender },
    receiver: { value: receiver, setValue: setReceiver },
    phoneNumber: { value: phoneNumber, setValue: setPhoneNumber },
    quantity: { value: quantity, setValue: setQuantity }
  };
  return hookset;
}
