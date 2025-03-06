import { useState } from 'react';
import { Group } from '@mantine/core';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './NavbarSimple.module.css';
import { navigationData, footerNavigation } from '../../config/navigation';
import { useAuth } from '../../context/AuthContext';

type NavbarSimpleProps = {
    userRole: 'admin' | 'customer' | 'insurer';
};

export function Navbar({ userRole }: NavbarSimpleProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [active, setActive] = useState(location.pathname);

    const links = navigationData[userRole].map((item) => (
        <Link
            className={classes.link}
            data-active={item.link === active || undefined}
            to={item.link}
            key={item.label}
            onClick={() => setActive(item.link)}
        >
            <item.icon className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));

    const footerLinks = footerNavigation.map((item) => (
        <Link
            className={classes.link}
            to={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                if (item.link === '/logout') {
                    logout();
                    navigate('/login');
                }
            }}
        >
            <item.icon className={classes.linkIcon} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <h1>IM</h1>
                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                {footerLinks}
            </div>
        </nav>
    );
}
