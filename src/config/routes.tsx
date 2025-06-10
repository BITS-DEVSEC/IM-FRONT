import type { ReactNode } from "react";
import type { ValidRole } from "./roles";

import AdminPolicies from "@/pages/admin/AdminPolicies";
import AdminProducts from "@/pages/admin/AdminProducts";
import AdminQuotations from "@/pages/admin/AdminQuotations";
import QuotationDetailsPage from "@/pages/admin/quotations/[id]";
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
		{
			path: "quotation-requests/:id",
			element: <QuotationDetailsPage />,
			isIndex: false,
		},
		{ path: "settings", element: <Settings /> },
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
	admin: "/admin", // Adjusted to match a potential "home" path for admin
	customer: "/customer/home", // Adjusted to match a potential "home" path for customer
	insurer: "/insurer/home",
};

// This can be dynamic based on logged-in user's role in a real app
// For now, defaulting to insurer. You might want to change this or handle it based on auth context.
export const defaultAppRedirect = defaultRoleRedirects.admin;
