import {
	Building2,
	Columns,
	LogOut,
	Settings,
	ShieldCheck,
} from "lucide-react";

export type NavItem = {
	link: string;
	label: string;
	icon: React.ComponentType<{ className?: string }>;
};

// Updated structure to support grouped navigation
export type NavItemGroup = {
	title: string;
	items: NavItem[];
};

export const navigationData: Record<string, NavItemGroup[]> = {
	admin: [
		{
			title: "MANAGEMENT",
			items: [
				{ link: "/admin/products", label: "Products", icon: Columns },
				{
					link: "/admin/quotation-requests",
					label: "Quotations",
					icon: ShieldCheck,
				},
				{ link: "/admin/policies", label: "Policies", icon: Building2 },
			],
		},
	],
};

export const footerNavigation = [
	{ link: "/admin/settings", label: "Settings", icon: Settings },
	{ link: "/logout", label: "Logout", icon: LogOut },
];
