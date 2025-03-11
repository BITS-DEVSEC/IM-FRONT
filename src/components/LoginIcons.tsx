 
import React, { ReactNode } from "react";

interface LoginIconsProps {
  children?: ReactNode;
  title?: string;
}

const LoginIcons: React.FC<LoginIconsProps> = ({ children, title = "Sign in to your account" }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      {children}
      <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h2>
    </div>
  );
};

export default LoginIcons;