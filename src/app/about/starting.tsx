import { WordRotate } from "@/components/magicui/word-rotate";
import CircularText from "@/components/textanimations/CircularText";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const starting = () => {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl py-16">
        <div className="relative flex-shrink-0">
          <Image
            src="/assets/profile.jpeg"
            alt="Profile"
            width={380}
            height={600}
            className="rounded-b-[200px] object-cover shadow-2xl contrast-125"
          />
          <div className="absolute bottom-0.5 left-64">
            <CircularText
              text="OMKAR*R*PANDHEKAR*"
              onHover="speedUp"
              spinDuration={20}
              className="size-12"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl font-bold font-inter sm:text-6xl md:text-6xl lg:text-6xl pb-8 tracking-wide">
            <div className="flex items-center gap-4">
              <span>A</span>
              <span className="text-green-500">Creative</span>
              <WordRotate
                words={["Developer", "Thinker"]}
                className="text-green-500"
              />
            </div>
            &amp;{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              digital designer
            </span>
          </h1>
          <p className="text-neutral-900 dark:text-neutral-100 text-lg mb-8 max-w-xl">
            I collaborate with brands globally to design impactful,
            mission-focused websites that drive results and achieve business
            goals.
          </p>
          <Button className="rounded-full px-8 py-6 text-md">My resume</Button>
        </div>
      </div>
    </div>
  );
};

export default starting;
