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
    // Track real page loading progress
    const updateProgress = () => {
      if (document.readyState === "loading") {
        setLoadingProgress(10);
      } else if (document.readyState === "interactive") {
        setLoadingProgress(50);
      } else if (document.readyState === "complete") {
        setLoadingProgress(100);
        // Hide the progress bar after completion
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }
    };

    // Initial progress check
    updateProgress();

    // Listen for DOM content loaded
    const handleDOMContentLoaded = () => {
      setLoadingProgress(50);
    };

    // Listen for window load
    const handleWindowLoad = () => {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    };

    // Add event listeners
    document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    window.addEventListener("load", handleWindowLoad);

    // Fallback: If page is already loaded, hide immediately
    if (document.readyState === "complete") {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsVisible(false);
      }, 200);
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={ref}
          className={cn(
            "fixed inset-x-0 top-0 z-50 h-[0.5px] origin-left bg-green-500 dark:bg-lime-500",
            className
          )}
          style={{
            scaleX: loadingProgress / 100,
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: loadingProgress / 100 }}
          exit={{ opacity: 0, scaleX: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            opacity: { duration: 0.2, ease: "easeInOut" },
          }}
        />
      )}
    </AnimatePresence>
  );
});

LoadingProgress.displayName = "LoadingProgress";
