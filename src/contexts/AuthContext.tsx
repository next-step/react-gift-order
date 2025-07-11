import { createContext } from 'react';
import type { AuthContextType } from './AuthTypes';

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default AuthContext;
