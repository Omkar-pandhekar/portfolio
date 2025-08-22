"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

export const LoadingProgress = React.forwardRef<
  HTMLDivElement,
  { className?: string }
>(({ className }, ref) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate page loading progress with smoother increments
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Hide the progress bar after a short delay
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 8 + 2; // Smaller, more consistent increments
      });
    }, 80); // Faster updates for smoother animation

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={ref}
          className={cn(
            "fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-green-400 via-green-500 to-emerald-500",
            className
          )}
          style={{
            scaleX: loadingProgress / 100,
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: loadingProgress / 100 }}
          exit={{ opacity: 0, scaleX: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            opacity: { duration: 0.4, ease: "easeInOut" },
          }}
        />
      )}
    </AnimatePresence>
  );
});

LoadingProgress.displayName = "LoadingProgress";
