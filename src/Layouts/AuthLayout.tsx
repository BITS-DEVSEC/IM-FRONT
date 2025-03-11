import { ModeToggle } from "@/components/mode-toggle";
import React, { ReactNode } from "react"; 

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 px-4">
       <ModeToggle /> 
      </header> 
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
       <div className="w-full max-w-xs sm:max-w-sm">{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;
