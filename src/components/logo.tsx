import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <img
        className={cn("size-7 w-8", className, "dark:hidden")}
        src="buna_norm.svg"
        alt="Logo"
      />
      <img
        className={cn("size-7 w-8", className, "hidden dark:block")}
        src="buna_white.svg"
        alt="Logo"
      />
    </>
  );
};
