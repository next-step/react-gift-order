import { useState } from "react";
import { type StateHook } from "./stateHookType";

export type InputErrorHandlerHook = {
  idValid: StateHook<boolean>;
  pwValid: StateHook<boolean>;
  idReason: StateHook<string | null>;
  pwReason: StateHook<string | null>;
};

export default function useInputErrorHandler() {
  const [idValid, setIDValid] = useState<boolean>(true);
  const [pwValid, setPWValid] = useState<boolean>(true);
  const [idReason, setIDReason] = useState<string | null>(null);
  const [pwReason, setPWReason] = useState<string | null>(null);
  const hookset = {
    idValid: { value: idValid, setValue: setIDValid },
    pwValid: { value: pwValid, setValue: setPWValid },
    idReason: { value: idReason, setValue: setIDReason },
    pwReason: { value: pwReason, setValue: setPWReason }
  };
  return hookset;
}
