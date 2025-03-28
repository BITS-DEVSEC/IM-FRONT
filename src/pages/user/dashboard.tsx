import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { SidebarContent } from "@/components/ui/sidebar";
import {
  BookOpen,
  House,
  Info,
  Car,
  MessageCircleQuestionIcon,
} from "lucide-react";

const data = {
  user: {
    name: "User",
    email: "User@example.com",
    avatar: "/avatars/User.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: House,
      isActive: true,
    },
    {
      title: "Vehicle",
      url: "#",
      icon: Car,
    },
    {
      title: "Request",
      url: "#",
      icon: MessageCircleQuestionIcon,
    },
  ],
  navSecondary: [
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Info,
    },
  ],
};

function Dashboard() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar>
          <SidebarContent>
            <NavMain items={data.navMain} />
            {/* <NavProjects projects={data.projects} /> */}
            <NavSecondary items={data.navSecondary} className="mt-auto" />
            {/* <ModeToggle /> */}
          </SidebarContent>
          <SidebarFooter>
            <NavUser user={data.user} />
          </SidebarFooter>
        </AppSidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Buna Bank</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <ModeToggle />
            {/* Moves toggle to the right */}
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50"></div>
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
export default Dashboard;
