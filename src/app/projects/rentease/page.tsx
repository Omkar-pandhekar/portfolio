import { notFound } from "next/navigation";
import { projects } from "../projects";
import SectionContainer from "@/components/layouts/SectionContainer";
import { MoveLeft, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import FadeContent from "@/components/animations/FadeContent";
import Image from "next/image";

export default async function RenteasePage() {
  // Get the AI-Notion project specifically
  const project = projects.find((p) => p.title === "RentEase");

  if (!project) {
    notFound();
  }

  return (
    <SectionContainer>
      <FadeContent
        blur={true}
        duration={1500}
        easing="ease-in"
        initialOpacity={0}
      >
        <div className="relative w-full mt-36 ">
          <div className="flex items-center justify-between">
            <Link href="/projects">
              <div className="opacity-40 flex items-center gap-2 hover:opacity-60">
                <MoveLeft size={20} />
                <h1>Back to Projects</h1>
              </div>
            </Link>
            <div className=" border-2 px-4 py-1 rounded-lg">
              <h1>{project.year}</h1>
            </div>
          </div>
          <div className="w-full relative flex items-center justify-center py-6 h-[500px]">
            <Image
              src={project.img1 || project.src || "/projects/website.jpg"}
              alt="Profile"
              width={1000}
              height={300}
              className="rounded-xl object-fit h-full w-full"
            />
          </div>
          <div className="flex items-center justify-between py-4">
            <TypingAnimation startOnView={true} delay={200}>
              {project.title}
            </TypingAnimation>
            <Button className="px-6 py-6 rounded-full" asChild>
              <Link href={project.href}>
                Check Out <MoveUpRight />
              </Link>
            </Button>
          </div>

          <div className="flex flex-row gap-24 items-center">
            <h1 className="opacity-60 font-inter basis-4/6">{project.intro}</h1>
            <div className="basis-2/6">
              <div className="flex flex-row items-center gap-5">
                <h1>Roles : </h1>
                <h1 className="opacity-60">Full stack developer</h1>
              </div>
              <div className="flex flex-row items-center gap-4">
                <h1>Client : </h1>
                <h1 className="opacity-60">Personal Project</h1>
              </div>
            </div>
          </div>

          <div className="w-full pt-10">
            <TypingAnimation
              className="text-3xl"
              startOnView={true}
              delay={400}
            >
              Overview
            </TypingAnimation>
            <div className="flex-1 mb-10">
              <div className="border-t-2 opacity-100 mt-4">
                <p className="mt-4 opacity-50">{project.overview}</p>
              </div>
            </div>
          </div>

          <div className="w-full pt-10">
            <TypingAnimation
              className="text-3xl"
              startOnView={true}
              delay={400}
            >
              Design Screens
            </TypingAnimation>
            <div className="flex-1 mb-10">
              <div className="opacity-100 mt-4">
                {project.screens && project.screens.length > 0 ? (
                  <div className="mt-4 space-y-8">
                    {project.screens.map((screen, index) => (
                      <div key={index} className="relative group">
                        <div className="mb-2">
                          <h3 className="text-xl font-medium opacity-80 border-b-2 py-4">
                            {index === 0 && "Home Page"}
                            {index === 1 && "Search Page"}
                          </h3>
                        </div>
                        <img
                          src={String(screen) || "/projects/website.jpg"}
                          alt={`${project.title} Screen ${index + 1}`}
                          className="rounded-xl object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 opacity-50">No design screens available</p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full pt-10">
            <TypingAnimation
              className="text-3xl"
              startOnView={true}
              delay={400}
            >
              Tech Stack
            </TypingAnimation>
            <div className="flex-1 mb-10">
              <div className="border-t-2 opacity-100 mt-4">
                {project.techstack && project.techstack.length > 0 ? (
                  <ul className="mt-4 opacity-80 space-y-2">
                    {project.techstack.map((tech, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-current rounded-full mr-3"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 opacity-50">
                    No tech stack information available
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full pt-1">
            <TypingAnimation
              className="text-3xl"
              startOnView={true}
              delay={400}
            >
              Features
            </TypingAnimation>
            <div className="flex-1 mb-10">
              <div className="border-t-2 opacity-100 mt-4">
                {project.features &&
                Object.keys(project.features).length > 0 ? (
                  <ul className="mt-4 opacity-80 space-y-2">
                    {Object.entries(project.features).map(
                      ([key, value], index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-current rounded-full mr-3"></span>
                          <span className="font-semibold opacity-90">
                            {key}:{" "}
                          </span>
                          <span className="opacity-60 ml-1">{value}</span>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="mt-4 opacity-50">
                    No features information available
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </FadeContent>
    </SectionContainer>
  );
}
