import {
    Columns,
    LayoutDashboard,
    LogOut,
    Settings,
    Building2,
    ShieldCheck,
  } from "lucide-react"

  export type NavItem = {
    link: string
    label: string
    icon: typeof LayoutDashboard
  }

  export const navigationData: Record<string, NavItem[]> = {
    insurer: [
      { link: "/insurer/home", label: "Dashboard", icon: LayoutDashboard },
      { link: "/insurer/listings", label: "Listings", icon: Columns },
      { link: "/insurer/policies", label: "Policies", icon: ShieldCheck },
      { link: "/insurer/companies", label: "Companies", icon: Building2 },
    ]
  }

  export const footerNavigation = [
    { link: "/settings", label: "Settings", icon: Settings },
    { link: "/logout", label: "Logout", icon: LogOut },
  ]
