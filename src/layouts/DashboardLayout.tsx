"use client";
import { Outlet, useLocation, Link } from "react-router-dom";
import { navigationData, footerNavigation } from "@/config/navigation";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
	SidebarInset,
	SidebarSeparator,
} from "@/components/ui/sidebar";
import type { ValidRole } from "@/config/roles";

interface AppSidebarProps {
	role: ValidRole;
}

function AppSidebar({ role }: AppSidebarProps) {
	const location = useLocation();

	const navItems = navigationData[role] || [];
	const currentPath = location.pathname;

	return (
		<Sidebar>
			<SidebarHeader>
				<div className="flex items-center gap-2 px-4 py-2">
					<div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
						<span className="text-sm font-bold uppercase">
							{role?.charAt(0)}
						</span>
					</div>
					<div className="font-semibold capitalize">{role} Portal</div>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{navItems.map((item) => (
								<SidebarMenuItem key={item.link}>
									<SidebarMenuButton
										asChild
										isActive={currentPath === item.link}
									>
										<Link to={item.link}>
											<item.icon className="h-4 w-4" />
											<span>{item.label}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarSeparator />
				<SidebarMenu>
					{footerNavigation.map((item) => (
						<SidebarMenuItem key={item.link}>
							<SidebarMenuButton asChild>
								<Link to={item.link}>
									<item.icon className="h-4 w-4" />
									<span>{item.label}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}

export interface DashboardLayoutProps {
	role: ValidRole;
}

export function DashboardLayout({ role }: DashboardLayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar role={role} />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger className="-ml-1" />
					<div className="font-semibold capitalize">{role} Dashboard</div>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4">
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
