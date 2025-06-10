import type { LoginCredentials } from "@/services/authService";

export type User = {
	role: "admin" | "customer" | "insurer";
	id: string;
	name: string;
	email?: string;
};

export type AuthContextType = {
	user: User | null;
	login: (userData: LoginCredentials) => Promise<void>;
	logout: () => Promise<void>;
	isAuthenticated: boolean;
};
