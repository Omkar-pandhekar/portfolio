"use client";
import { Sparkle } from "lucide-react";
import ShinyText from "../textanimations/ShinyText";
import SectionContainer from "../layouts/SectionContainer";
import Projects from "./Projects";
import Info from "./Info";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function About() {
  const word =
    "Hi, I'm Omkar Pandhekar, a passionate Full Stack Developer skilled in crafting dynamic, user-centric web applications. With a solid foundation in Data Structures and Algorithms, and a creative edge in design and content editing, I bring both functionality and flair to every project I take on. I thrive on turning ideas into intuitive digital experiences.";

  return (
    <SectionContainer>
      <div className="relative w-full">
        <div className="flex items-center justify-center gap-2">
          <Sparkle size={18} className="text-green-500 dark:text-lime-500" />
          <ShinyText
            text="About Me"
            disabled={false}
            speed={1.5}
            className="text-xl text-green-500 dark:text-lime-500 "
          />
        </div>
        <div className="flex items-center justify-cente mx-20  text-center">
          <TextGenerateEffect words={word} className="font-saira" />
        </div>
      </div>
      <Projects />
      <Info />
    </SectionContainer>
  );
}
