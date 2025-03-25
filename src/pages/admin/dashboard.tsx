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
  Frame,
  Map,
  PieChart,
  House,
  Info,
  ShoppingBag,
  Users,
  ChartLine,
  FrameIcon,
} from "lucide-react";

const data = {
  user: {
    name: "Admin",
    email: "Admin@example.com",
    avatar: "/avatars/Admin.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: House,
      isActive: true,
    },
    {
      title: "Product",
      url: "#",
      icon: ShoppingBag,
      items: [
        {
          title: "Waitlist",
          url: "/admin/product/waitlist",
        },
        {
          title: "Approved Listings",
          url: "/admin/product/approved",
        },
      ],
    },
    {
      title: "User Managment",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Insurers",
          url: "#",
        },
        {
          title: "Brokers",
          url: "#",
        },
      ],
    },
    {
      title: "Roles and Permission",
      url: "#",
      icon: FrameIcon,
      items: [
        {
          title: "Roles",
          url: "#",
        },
        {
          title: "permissions",
          url: "#",
        },
      ],
    },
    {
      title: "Feedback & Analysis",
      url: "#",
      icon: ChartLine,
      items: [
        {
          title: "Statistics of product",
          url: "#",
        },
        {
          title: "User reviews",
          url: "#",
        },
      ],
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
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
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
                    <BreadcrumbLink href="">Buna Bank</BreadcrumbLink>
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
