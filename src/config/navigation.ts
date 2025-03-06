import {
    CardStackIcon,
    DashboardIcon,
    ExitIcon,
} from '@radix-ui/react-icons';

export type NavItem = {
    link: string;
    label: string;
    icon: typeof DashboardIcon;
};

export const navigationData: Record<string, NavItem[]> = {
    insurer: [
        { link: '/insurer/home', label: 'Home', icon: DashboardIcon },
        { link: '/insurer/listings', label: 'Listing', icon: CardStackIcon },
    ],
    admin: [
        { link: '/admin/home', label: 'Home', icon: DashboardIcon },
        { link: '/admin/listings', label: 'Listing', icon: CardStackIcon },
    ],
    customer: [
        { link: '/customer/home', label: 'Home', icon: DashboardIcon },
        { link: '/customer/listings', label: 'Listing', icon: CardStackIcon },
    ],
};

export const footerNavigation = [
    { link: '/logout', label: 'Logout', icon: ExitIcon },
];
