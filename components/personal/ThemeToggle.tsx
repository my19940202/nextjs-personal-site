"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  if (!mounted) {
    return (
      <div
        className={cn("ps-theme-toggle animate-pulse opacity-50", className)}
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      className={cn("ps-theme-toggle", className)}
      aria-label={isDark ? "切换到浅色模式" : "切换到深色模式"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4" />
          <span>浅色</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          <span>深色</span>
        </>
      )}
    </button>
  );
}
