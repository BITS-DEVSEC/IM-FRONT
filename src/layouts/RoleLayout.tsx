import { VALID_ROLES, type ValidRole } from "@/config/roles";
import { useLocation } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";

export function RoleLayout() {
	const location = useLocation();
	const role = location.pathname.split("/")[1];

	if (!VALID_ROLES.includes(role as ValidRole)) {
		return <div>Invalid role</div>; // or redirect to an error page
	}

	return <DashboardLayout role={role as ValidRole} />;
}
