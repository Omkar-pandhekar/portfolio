"use client";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /** Optional CSS class name to apply custom styles */
  className?: string;
  /** Whether to reverse the animation direction @default false */
  reverse?: boolean;
  /** Whether to pause the animation on hover @default false */
  pauseOnHover?: boolean;
  /** Whether to slow down the animation on hover @default false */
  slowOnHover?: boolean;
  /** Content to be displayed in the marquee */
  children: React.ReactNode;
  /** Whether to animate vertically instead of horizontally @default false */
  vertical?: boolean;
  /** Number of times to repeat the content @default 4 */
  repeat?: number;
  /** Duration in seconds for one full cycle @default 40 */
  durationSec?: number;
  /** Gap between repeated items (any valid CSS length) @default 1rem */
  gap?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  slowOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  durationSec = 40,
  gap = "1rem",
  ...props
}: MarqueeProps) {
  // Determine axis and values for animation
  const animateKey = vertical ? "y" : "x";
  const animateValues = reverse ? [0, 2000] : [0, -2000];

  return (
    <div
      {...props}
      className={cn(
        "group overflow-hidden p-2",
        {
          flex: true,
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{ gap }}
    >
      <motion.div
        className={cn("flex whitespace-nowrap", {
          "flex-row": !vertical,
          "flex-col": vertical,
        })}
        animate={{ [animateKey]: animateValues as unknown as number[] }}
        transition={{
          [animateKey]: {
            repeat: Infinity,
            repeatType: "loop",
            duration: durationSec,
            ease: "linear",
            repeatDelay: 0,
          },
        }}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex items-center justify-around", {
                "flex-row": !vertical,
                "flex-col": vertical,
              })}
              style={{ gap }}
            >
              {children}
            </div>
          ))}
      </motion.div>
    </div>
  );
}
