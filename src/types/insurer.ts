export type InsurerProfile = {
	id: string;
	role: "insurer";
	name: string;
	email: string;
	description: string;
	contact_email: string;
	contact_phone: string;
	api_endpoint: string;
	api_key: string;
	logo_url: string | File | null;
	password_reset_required: boolean;
	profile_complete: boolean;
};
