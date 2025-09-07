import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

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
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={
        {
          // CSS variables used by animation keyframes
          "--duration": `${durationSec}s`,
          "--gap": gap,
          gap: "var(--gap)",
        } as React.CSSProperties
      }
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around",
              vertical ? "animate-marquee-vertical" : "animate-marquee",
              {
                "flex-row": !vertical,
                "flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "group-hover:[animation-duration:40s]": slowOnHover,
              }
            )}
            style={
              {
                gap: "var(--gap)",
                animationDuration: "var(--duration)",
                animationDirection: reverse ? "reverse" : undefined,
              } as React.CSSProperties
            }
          >
            {children}
          </div>
        ))}
    </div>
  );
}
