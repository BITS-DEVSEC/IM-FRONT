import type { LoginCredentials } from "@/services/authService";
import type { InsurerProfile } from "./insurer";

export type User =
	| {
			role: "admin" | "customer" | "insurer";
			id: string;
			name: string;
			email?: string;
	  }
	| InsurerProfile;

export type AuthContextType = {
	user: User | null;
	login: (userData: LoginCredentials) => Promise<void>;
	logout: () => Promise<void>;
	isAuthenticated: boolean;
	isLoading: boolean;
};
