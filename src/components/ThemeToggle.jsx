import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer
        ${isLight ? "bg-[#030312]" : "bg-[#ebeffe]"}
        hover:scale-105 hover:shadow-lg
      `}
      aria-label="Toggle Theme"
    >
      {isLight ? (
        <Moon className="w-6 h-6 text-[#3b82f6]" />
      ) : (
        <Sun className="w-6 h-6 text-[#8b5cf6]" />
      )}
    </button>
  );
}
