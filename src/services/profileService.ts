export interface UserProfile {
	id: string;
	companyName: string;
	email: string;
	description: string;
	contactEmail: string;
	contactPhone: string;
	logo_url: string | Blob | null;
	profile_complete: boolean;
}

// Mock database
let mockUserProfile: UserProfile = {
	id: "insurer-123",
	companyName: "Acme Insurance Co.",
	email: "info@acme.com",
	description: "A leading insurance provider.",
	contactEmail: "contact@acme.com",
	contactPhone: "+1 (123) 456-7890",
	logo_url: null,
	profile_complete: false,
};

export const profileService = {
	async fetchProfile(): Promise<UserProfile> {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log("Fetched profile:", mockUserProfile);
				resolve({ ...mockUserProfile });
			}, 500);
		});
	},

	async updateProfile(updates: Partial<UserProfile>): Promise<UserProfile> {
		return new Promise((resolve) => {
			setTimeout(() => {
				mockUserProfile = { ...mockUserProfile, ...updates };
				console.log("Updated profile:", mockUserProfile);
				resolve({ ...mockUserProfile });
			}, 500);
		});
	},
};
