import type { StateHook } from "@src/hooks/stateHookType";
import { createContext } from "react";

type UserContextType = {
  valid: StateHook<boolean>;
  user: StateHook<string | null>;
  email: StateHook<string | null>;
} | null;

const UserContext = createContext<UserContextType>(null);

export default UserContext;
