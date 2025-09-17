"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      aria-label="Toggle Dark Mode"
      whileTap={{
        scale: 0.7,
        rotate: 360,
        transition: { duration: 0.2 },
      }}
      whileHover={{ scale: 1.2 }}
      className="relative z-50"
    >
      <AnimatedThemeToggler
        className="inline-flex"
        renderIcon={(isDark) =>
          mounted &&
          (isDark ? (
            <BsSunFill size={24} className="text-yellow-500" />
          ) : (
            <BsMoonFill
              size={24}
              className="text-gray-700 dark:text-gray-300"
            />
          ))
        }
        onToggle={(nextIsDark) => setTheme(nextIsDark ? "dark" : "light")}
      />
    </motion.div>
  );
}
