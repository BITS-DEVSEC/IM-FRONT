import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("system");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    if (currentTheme === "light") {
      setTheme("dark");
      setCurrentTheme("dark");
    } else {
      setTheme("light");
      setCurrentTheme("light");
    }
  };

  return (
    <Button
      className="ml-auto"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
    >
      {currentTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
