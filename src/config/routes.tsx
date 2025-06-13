import type { ReactNode } from "react";
import type { ValidRole } from "./roles";

import AdminPolicies from "@/pages/admin/AdminPolicies";
import AdminProducts from "@/pages/admin/AdminProducts";
import AdminQuotations from "@/pages/admin/AdminQuotations";
import Settings from "@/pages/settings/settings.tsx";

interface RouteConfig {
	path: string;
	element: ReactNode;
	isIndex?: boolean;
}

export const roleSpecificRoutes: Record<ValidRole, RouteConfig[]> = {
	admin: [
		// Define admin routes here. Example:
		// { path: "dashboard", element: <AdminDashboardPage />, isIndex: true },
		{ path: "products", element: <AdminProducts />, isIndex: true },
		{ path: "quotation-requests", element: <AdminQuotations /> },
		{ path: "policies", element: <AdminPolicies /> },
		{ path: "settings/*", element: <Settings /> },
	],
	customer: [
		// Define customer routes here. Example:
		// { path: "profile", element: <CustomerProfilePage />, isIndex: true },
	],
	insurer: [
		// Define insurer routes here. Example:
		// { path: "home", element: <InsurerHome />, isIndex: true },
		// { path: "listings", element: <InsurerListings /> },
	],
};

export const defaultRoleRedirects: Record<ValidRole, string> = {
	admin: "/admin/products",
	customer: "/customer/home",
	insurer: "/insurer/home",
};

// All unauthenticated users would be redirected to the login page by default
export const defaultAppRedirect = "/login";
