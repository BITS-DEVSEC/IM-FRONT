import { Outlet, useLocation } from "react-router-dom";

const VALID_ROLES = ["admin", "customer", "insurer"] as const;
type ValidRole = (typeof VALID_ROLES)[number];

export function RoleLayout() {
	const location = useLocation();
	const role = location.pathname.split("/")[1];

	if (!VALID_ROLES.includes(role as ValidRole)) {
		return <div>Invalid role</div>; // or redirect to an error page
	}

	return <Outlet />;
}
