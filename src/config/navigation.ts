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
    admin: [
      { link: "/admin/home", label: "Dashboard", icon: LayoutDashboard },
      { link: "/admin/products", label: "Products", icon: Columns },
      { link: "/admin/quotation-requests", label: "Quotations", icon: ShieldCheck },
      { link: "/admin/policies", label: "Policies", icon: Building2 },
    ]
  }

  export const footerNavigation = [
    { link: "/settings", label: "Settings", icon: Settings },
    { link: "/logout", label: "Logout", icon: LogOut },
  ]
