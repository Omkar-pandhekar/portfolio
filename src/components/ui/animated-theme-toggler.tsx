"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type AnimatedThemeTogglerProps = {
  className?: string;
  renderIcon?: (isDarkMode: boolean) => React.ReactNode;
  onToggle?: (nextIsDarkMode: boolean) => void;
};

export const AnimatedThemeToggler = ({
  className,
  renderIcon,
  onToggle,
}: AnimatedThemeTogglerProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    // Initialize from current document state to avoid hydration mismatch
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);
  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const currentlyDark = document.documentElement.classList.contains("dark");
    const nextIsDark = !currentlyDark;

    await document.startViewTransition(() => {
      flushSync(() => {
        document.documentElement.classList.toggle("dark", nextIsDark);
        setIsDarkMode(nextIsDark);
        onToggle?.(nextIsDark);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };
  return (
    <button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
      {renderIcon ? renderIcon(isDarkMode) : isDarkMode ? <SunDim /> : <Moon />}
    </button>
  );
};
