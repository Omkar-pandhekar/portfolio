"use client";

import { Provider as TooltipProvider } from "@radix-ui/react-tooltip";
import classNames from "classnames";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ActivityTooltip from "./activity-tooltip";
import { ContributionCalendar } from "./github";

interface Props {
  contributions: ContributionCalendar;
}

export default function Calendar({ contributions }: Props) {
  const { weeks, months, colors } = contributions;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <TooltipProvider delayDuration={400} skipDelayDuration={100}>
      <div
        ref={ref}
        className="relative flex flex-col space-y-4 w-[calc(100%-53px)] md:w-[800px] lg:w-[1000px]"
      >
        {/* Month labels - properly aligned with weeks */}
        <div className="flex justify-start overflow-hidden text-sm dark:text-neutral-400">
          {months.map((month, index) => (
            <div
              key={month.firstDay}
              className={classNames(
                "text-center",
                `${month.totalWeeks < 2 ? "invisible" : ""}`
              )}
              style={{
                width: `${month.totalWeeks * 18}px`,
                marginLeft: index === 0 ? "0" : "4px",
              }}
            >
              {month.name}
            </div>
          ))}
        </div>

        {/* Calendar grid with proper alignment */}
        <div className="flex justify-start overflow-hidden">
          {weeks?.map((week) => (
            <div
              key={week.firstDay}
              className="flex flex-col"
              style={{ marginRight: "4px" }}
            >
              {week.contributionDays.map((contribution) => {
                const backgroundColor =
                  contribution.contributionCount > 0 && contribution.color;

                const randomizedDelay =
                  Math.random() * week.contributionDays.length * 0.2;

                return (
                  <ActivityTooltip
                    block={
                      <motion.span
                        key={contribution.date}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        variants={{
                          initial: { opacity: 0, translateY: -20 },
                          animate: {
                            opacity: 1,
                            translateY: 0,
                            transition: { delay: randomizedDelay },
                          },
                        }}
                        className="my-[1.5px] block rounded-sm h-4 w-4 bg-neutral-200 dark:bg-[#161B22]"
                        style={
                          backgroundColor ? { backgroundColor } : undefined
                        }
                      />
                    }
                    count={contribution.contributionCount}
                    date={new Date(contribution.date)}
                    key={contribution.date}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="dark:text-neutral-400">Less</span>
            <ul className="flex gap-1">
              <motion.li className="h-2.5 w-2.5 rounded-xs bg-neutral-300 dark:bg-neutral-800" />
              {colors.map((item, index) => (
                <motion.li
                  key={item}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  variants={{
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { delay: index * 0.5 },
                    },
                  }}
                  className="h-2.5 w-2.5 rounded-xs"
                  style={{ backgroundColor: item }}
                />
              ))}
            </ul>
            <span>More</span>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
