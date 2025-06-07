import type { User } from "@/types/auth";

export const mockUser: User = {
	role: "admin",
	id: "user1",
	name: "John Doe",
	email: "john.doe@example.com",
};

export const fetchUser = () => {
	return new Promise<User>((resolve) => {
		setTimeout(() => {
			resolve(mockUser);
		}, 500); // Simulate network delay
	});
};

export interface LoginCredentials {
	username: string;
	password: string;
}

export const loginUser = (userData: LoginCredentials) => {
	return new Promise<User>((resolve, reject) => {
		setTimeout(() => {
			if (userData.username === "admin" && userData.password === "password") {
				resolve({ ...mockUser, name: userData.username });
			} else {
				reject(new Error("Invalid credentials"));
			}
		}, 500);
	});
};

export const logoutUser = () => {
	return new Promise<boolean>((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 500);
	});
};
