export interface InsurerProfile {
	id: string;
	companyName: string;
	email: string;
	description: string;
	contactEmail: string;
	contactPhone: string;
	logo_url: string | Blob | null;
	profile_complete: boolean;
}
