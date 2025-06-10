import { loginUser, logoutUser, mockUser } from "@/services/authService";
import type { LoginCredentials } from "@/services/authService";
import type { AuthContextType, User } from "@/types/auth";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const initializeAuth = async () => {
			// TODO: In a production environment, this should involve actual authentication (e.g., checking a token).
			// For development, we bypass authentication and set a mock user.
			setUser(mockUser);
			setIsAuthenticated(true);
		};
		initializeAuth();
	}, []);

	const login = async (userData: LoginCredentials) => {
		try {
			const loggedInUser = await loginUser(userData);
			setUser(loggedInUser);
			setIsAuthenticated(true);
			console.log("Login successful:", loggedInUser);
		} catch (error) {
			console.error("Login failed:", error);
			throw error; // Re-throw to allow components to handle login errors
		}
	};

	const logout = async () => {
		try {
			await logoutUser();
			setUser(null);
			setIsAuthenticated(false);
			console.log("Logout successful");
		} catch (error) {
			console.error("Logout failed:", error);
			throw error;
		}
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
