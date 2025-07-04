import { useAuthContext } from "@/features/auth/context/AuthContext";

export const useAuth = () => {
    const { authState, setAuthState } = useAuthContext();

    const signIn = (nickname: string, email: string) => {
        setAuthState({
            isAuthenticated: true,
            nickname,
            email,
        });
    };

    const signOut = () => {
        setAuthState({
            isAuthenticated: false,
            nickname: undefined,
            email: undefined,
        });
    };

    return {
        ...authState,
        signIn,
        signOut,
    };
};
