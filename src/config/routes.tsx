import InsurerHome from "@/pages/insurer/InsurerHome";
import InsurerListings from "@/pages/insurer/InsurerListings";
import type { ValidRole } from "./roles";
import type { ReactNode } from "react";

interface RouteConfig {
  path: string;
  element: ReactNode;
  isIndex?: boolean;
}

export const roleSpecificRoutes: Record<ValidRole, RouteConfig[]> = {
  admin: [
    // Define admin routes here. Example:
    // { path: "dashboard", element: <AdminDashboardPage />, isIndex: true },
  ],
  customer: [
    // Define customer routes here. Example:
    // { path: "profile", element: <CustomerProfilePage />, isIndex: true },
  ],
  insurer: [
    { path: "home", element: <InsurerHome />, isIndex: true },
    { path: "listings", element: <InsurerListings /> },
  ],
};

export const defaultRoleRedirects: Record<ValidRole, string> = {
  admin: "/admin/home", // Adjusted to match a potential "home" path for admin
  customer: "/customer/home", // Adjusted to match a potential "home" path for customer
  insurer: "/insurer/home",
};

// This can be dynamic based on logged-in user's role in a real app
// For now, defaulting to insurer. You might want to change this or handle it based on auth context.
export const defaultAppRedirect = defaultRoleRedirects.insurer;
