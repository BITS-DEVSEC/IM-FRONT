import { Outlet, useLocation } from "react-router-dom";
import Shell from "../components/shell/basicshell";

const VALID_ROLES = ['admin', 'customer', 'insurer'] as const;
type ValidRole = typeof VALID_ROLES[number];

export function RoleLayout() {
    const location = useLocation();
    const role = location.pathname.split('/')[1]; // Assuming the role is the first segment of the path

    if (!VALID_ROLES.includes(role as ValidRole)) {
        return <div>Invalid role</div>; // or you can use <Navigate to="/error" /> to redirect
    }

    return (
        <Shell userRole={role as ValidRole}>
            <Outlet />
        </Shell>
    );
}
