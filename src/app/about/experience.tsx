import ShinyText from "@/components/textanimations/ShinyText";
import { experiences } from "@/components/layouts/constants";
import { Sparkle } from "lucide-react";
import React from "react";

export default function Experience() {
  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2">
        <Sparkle size={18} className="text-green-500 dark:text-lime-500" />
        <ShinyText
          text="Experience"
          disabled={false}
          speed={1.5}
          className="text-lg sm:text-xl text-green-500 dark:text-lime-500"
        />
      </div>

      <div className="mt-8 space-y-6">
        {experiences.map((item) => (
          <div
            key={`${item.company}-${item.period}`}
            className="rounded-2xl border border-neutral-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-clash text-2xl font-semibold tracking-wide text-neutral-900 dark:text-neutral-100">
                  {item.company}
                </h2>
                <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {item.role}
                  </span>
                  <span className="px-2 text-neutral-400 dark:text-neutral-500">
                    •
                  </span>
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="mt-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:mt-0">
                {item.period}
              </div>
            </div>

            <ul className="mt-5 list-disc space-y-3 pl-5 text-neutral-800 dark:text-neutral-200">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
