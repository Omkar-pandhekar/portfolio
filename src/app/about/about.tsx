import SectionContainer from "@/components/layouts/SectionContainer";
import ShinyText from "@/components/textanimations/ShinyText";
import { Sparkle } from "lucide-react";
import React from "react";
import Hero from "./hero";
import GithubContributions from "@/components/github-contributions/github-contributions";
import LeetCodeStats from "./leetcode-stats";

const about = () => {
  return (
    <SectionContainer>
      <div className="relative w-full pt-20">
        <div className="flex items-center gap-2 ml-8 sm:pl-2">
          <Sparkle size={18} className="text-green-500 dark:text-lime-500" />
          <ShinyText
            text="About"
            disabled={false}
            speed={1.5}
            className="text-xl text-green-500 dark:text-lime-500"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 w-full px-8">
        <Hero />
        <div className="w-full">
          <GithubContributions />
        </div>
        <div className="w-full">
          <LeetCodeStats />
        </div>
      </div>
    </SectionContainer>
  );
};

export default about;
