import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User, AuthContextType } from '@/types/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    // Change to your role
    const [user] = useState<User>({
        role: 'admin',
        id: 'user1',
        name: 'John Doe',
        email: 'john.doe@example.com'
    });

    const login = (userData: User) => {
        console.log('Login called:', userData);
    };

    const logout = () => {
        console.log('Logout called');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: true }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
