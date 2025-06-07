import { VALID_ROLES, type ValidRole } from "@/config/roles";
import { Navigate, useLocation } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";
import { useAuth } from "@/context/AuthContext";

export function RoleLayout() {
	const location = useLocation();
	const role = location.pathname.split("/")[1];
	const { isAuthenticated, user } = useAuth();

	// If not authenticated, redirect to login page
	// We check for user role after authentication
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	// If authenticated, but the route's role doesn't match the user's role, redirect to the user's default role path.
	if (user && user.role !== (role as ValidRole)) {
		const userDefaultPath = defaultRoleRedirects[user.role];
		return <Navigate to={userDefaultPath} replace />;
	}

	// If authenticated, but role is invalid for the route, redirect to admin if admin, or login
	if (!VALID_ROLES.includes(role as ValidRole)) {
		return user?.role === "admin" ? (
			<Navigate to="/admin" replace />
		) : (
			<Navigate to="/login" replace />
		);
	}

	return <DashboardLayout role={role as ValidRole} />;
}
