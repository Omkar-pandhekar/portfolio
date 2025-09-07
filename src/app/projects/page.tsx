"use client";
import { FocusCards } from "@/components/ui/focus-cards";
import { projects } from "@/components/layouts/constants";
import { Sparkle } from "lucide-react";
import ShinyText from "@/components/textanimations/ShinyText";
import SectionContainer from "@/components/layouts/SectionContainer";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Connect from "@/components/layouts/connect";
import { LoadingProgress } from "@/components/magicui/loading-progress";
import FadeContent from "@/components/animations/FadeContent";

export default function Projects() {
  return (
    <>
      <LoadingProgress />
      <SectionContainer>
        <FadeContent
          blur={true}
          duration={1500}
          easing="ease-in"
          initialOpacity={0}
        >
          <div className="relative w-full mt-48">
            <div className="flex items-center gap-2 ml-8">
              <Sparkle
                size={20}
                className="text-green-500 dark:text-lime-500"
              />
              <ShinyText
                text="My Projects"
                disabled={false}
                speed={1.5}
                className="text-xl text-green-500 dark:text-lime-500"
              />
            </div>
            <div className="ml-8">
              <TypingAnimation className="font-clash tracking-wide font-semibold">
                Some of my projects
              </TypingAnimation>
            </div>
            <div className="w-full">
              <FocusCards cards={projects} />
            </div>
          </div>
          <Connect />
        </FadeContent>
      </SectionContainer>
    </>
  );
}
