import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-0">
      <div className="w-full max-w-xs sm:max-w-sm">{children}</div>
    </div>
  );
};

export default AuthLayout;
