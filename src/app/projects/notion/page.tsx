import { notFound } from "next/navigation";
import { projects } from "@/components/layouts/constants";
import SectionContainer from "@/components/layouts/SectionContainer";
import { MoveLeft, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import FadeContent from "@/components/animations/FadeContent";
import { LoadingProgress } from "@/components/magicui/loading-progress";

export default async function NotionPage() {
  // Get the AI-Notion project specifically
  const project = projects.find((p) => p.title === "AI-Notion");

  if (!project) {
    notFound();
  }

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
          <div className="relative w-full mt-20 sm:mt-28 md:mt-36 ">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link href="/projects">
                <div className="opacity-40 flex items-center gap-2 hover:opacity-60">
                  <MoveLeft size={20} />
                  <h1 className="text-sm sm:text-base">Back to Projects</h1>
                </div>
              </Link>
              <div className=" border-2 px-3 py-1 rounded-lg text-xs sm:text-sm">
                <h1 className="text-xs sm:text-sm">{project.year}</h1>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-clash tracking-wide font-semibold">
                {project.title}
              </h1>
              <Button
                className="px-6 py-6 rounded-full w-full sm:w-auto"
                asChild
              >
                <Link href={project.href}>
                  Check Out <MoveUpRight />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-24 items-start">
              <h1 className="opacity-60 font-inter basis-full md:basis-4/6 text-sm sm:text-base ">
                {project.intro}
              </h1>
              <div className="basis-full md:basis-2/6 w-full">
                <div className="flex flex-row items-center justify-between md:justify-start gap-5">
                  <h1 className="text-sm sm:text-base">Roles : </h1>
                  <h1 className="opacity-60 text-sm sm:text-base">
                    Full stack developer
                  </h1>
                </div>
                <div className="flex flex-row items-center justify-between md:justify-start gap-4">
                  <h1 className="text-sm sm:text-base">Client : </h1>
                  <h1 className="opacity-60 text-sm sm:text-base">
                    Personal Project
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full pt-10">
              <h1 className="text-2xl sm:text-3xl font-clash tracking-wide font-semibold">
                Overview
              </h1>
              <div className="flex-1 mb-10">
                <div className="border-t-2 opacity-100 mt-4">
                  <h1 className="mt-4 opacity-60  text-sm sm:text-base">
                    {project.overview}
                  </h1>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="relative group h-64 sm:h-80 md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
                <video
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  poster={
                    project.img1 || project.src || "/projects/website.jpg"
                  }
                >
                  <source src="/projects/notion/Intro-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="w-full pt-10">
              <h1 className="text-2xl sm:text-3xl font-clash tracking-wide font-semibold">
                Tech Stack
              </h1>
              <div className="flex-1 ">
                <div className="border-t-2 opacity-100 mt-4">
                  {project.techstack && project.techstack.length > 0 ? (
                    <ul className="mt-4 opacity-80 flex flex-wrap gap-2 sm:gap-4">
                      {project.techstack.map((tech, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm sm:text-base"
                        >
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

            <div className="w-full pt-10">
              <h1 className="text-2xl sm:text-3xl font-clash tracking-wide font-semibold">
                Features
              </h1>
              <div className="flex-1 mb-10">
                <div className="border-t-2 opacity-100 mt-4">
                  {project.features &&
                  Object.keys(project.features).length > 0 ? (
                    <ul className="mt-4 opacity-80 space-y-2">
                      {Object.entries(project.features).map(
                        ([key, value], index) => (
                          <li key={index} className="flex items-start">
                            <span className="mt-2 w-2 h-2 bg-current rounded-full mr-3"></span>
                            <div className="text-sm sm:text-base break-words">
                              <span className="font-semibold opacity-90">
                                {key}:{" "}
                              </span>
                              <span className="opacity-60 ml-1">{value}</span>
                            </div>
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
    </>
  );
}
