import type { ValidRole } from "@/config/roles";

export const defaultRoleRedirects: Record<ValidRole, string> = {
	admin: "/admin",
	customer: "/customer",
	insurer: "/insurer",
};
