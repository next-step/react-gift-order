import React, { useState, useEffect, useMemo } from 'react';
import AuthContext from './AuthContext';
import type { AuthContextType, User } from './AuthTypes';

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        if (email && password) {
            const mockUser: User = {
                id: '1',
                email,
                name: email.split('@')[0],
            };
            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const value: AuthContextType = useMemo(() => ({
        user,
        login,
        logout,
        isLoading,
    }), [user, login, logout, isLoading]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider; 
