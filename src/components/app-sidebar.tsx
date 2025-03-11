import * as React from "react";
import { Command } from "lucide-react";

// import { ModeToggle } from "@/components/mode-toggle"
import { ReactNode } from "react";
import Buna from "/buna_norm.svg";
import BunaWhite from "/buna_white.svg";
interface AuthLayoutProps {
  children: ReactNode;
}

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar({
  children,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-primary-foreground text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <img src={Buna} className="dark:hidden size-7" />
                  <img src={BunaWhite} className="dark:block hidden size-7" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Buna</span>
                  <span className="truncate text-xs">Bank</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {children}
    </Sidebar>
  );
}
