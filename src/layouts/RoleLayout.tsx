import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { defaultRoleRedirects } from "@/config/paths";
import { VALID_ROLES, type ValidRole } from "@/config/roles";
import { useAuth } from "@/context/AuthContext";
import type { InsurerProfile } from "@/types/insurer";
import { Navigate, useLocation } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";

// Type guard to check if user has a role property
function hasRole(user: any): user is { role: ValidRole } & Record<string, any> {
  return 'role' in user && typeof user.role === 'string';
}

// Type guard to check if user is an InsurerProfile
function isInsurerProfile(user: any): user is InsurerProfile {
  return 'companyName' in user && 'profile_complete' in user;
}

export function RoleLayout() {
  const location = useLocation();
  const role = location.pathname.split("/")[1];
  const { isAuthenticated, user, isLoading } = useAuth();

  // Display a loading spinner while authentication is in progress
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If we have a user, handle role-based routing
  if (user) {
    // For users with a role (basic user)
    if (hasRole(user)) {
      // If the route's role doesn't match the user's role, redirect to default path
      if (user.role !== (role as ValidRole)) {
        const userDefaultPath = defaultRoleRedirects[user.role];
        return <Navigate to={userDefaultPath} replace />;
      }
      
      // If role is invalid for the route, redirect to admin if admin, or login
      if (!VALID_ROLES.includes(role as ValidRole)) {
        return user.role === "admin" ? (
          <Navigate to="/admin" replace />
        ) : (
          <Navigate to="/login" replace />
        );
      }
    } 
    // For InsurerProfile, we'll treat them as 'insurer' role
    else if (isInsurerProfile(user)) {
      // If the route's role doesn't match 'insurer', redirect to insurer path
      if (role !== 'insurer') {
        const userDefaultPath = defaultRoleRedirects.insurer;
        return <Navigate to={userDefaultPath} replace />;
      }
    }
  }

  // If we get here, either:
  // 1. The user's role matches the route
  // 2. The user is an insurer on an insurer route
  // 3. The route is invalid but we're letting DashboardLayout handle it
  return <DashboardLayout role={(role as ValidRole) || 'insurer'} />;
}
