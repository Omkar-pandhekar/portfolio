import { WordRotate } from "@/components/magicui/word-rotate";
import CircularText from "@/components/textanimations/CircularText";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const starting = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl w-full mx-auto py-16">
        <div className="relative flex-shrink-0 w-full flex justify-center lg:w-auto lg:justify-start">
          <Image
            src="/assets/profile.jpeg"
            alt="Profile"
            width={350}
            height={600}
            className="rounded-b-[200px] object-cover shadow-2xl contrast-125"
          />
          <div className="absolute bottom-0.5 left-64 hidden sm:block">
            <CircularText
              text="OMKAR*R*PANDHEKAR*"
              onHover="speedUp"
              spinDuration={20}
              className="size-12"
            />
          </div>
        </div>
        <div className="flex flex-col items-start p-10 sm:p-8">
          <div className="pb-8 text-3xl font-medium font-clash tracking-wide xl:tracking-wider lg:text-5xl ">
            <div className="flex items-center gap-4 ">
              <span>A</span>
              <span className="text-green-500 dark:text-lime-300">
                Creative
              </span>
              <span className="hidden sm:inline">
                <WordRotate
                  words={["Developer", "Thinker"]}
                  className="text-green-500 dark:text-lime-300"
                />
              </span>
              <span className="sm:hidden text-green-500 dark:text-lime-300">
                Developer
              </span>
            </div>
            &amp;{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              digital designer
            </span>
          </div>
          <p className="text-neutral-900 dark:text-neutral-100 text-lg mb-8 max-w-xl">
            I engineer and deploy full-stack web applications, translating
            complex business requirements into high-performance, scalable
            software solutions.
          </p>
          <Button className="rounded-full px-8 py-6 text-md">My resume</Button>
        </div>
      </div>
    </div>
  );
};

export default starting;
