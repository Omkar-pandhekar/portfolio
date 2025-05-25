"use client";

import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import Marquee from "./marquee";
import { Button } from "../ui/button";
import ShinyText from "../textanimations/ShinyText";
import About from "./About";

export default function Hero() {
  return (
    <section className="relative w-full pt-24">
      {/* Main content area - Centered with horizontal padding and controlled top padding */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        {/* Top intro text */}
        <div className="mb-4 text-lg font-medium md:text-xl">
          👋 Hey! It&apos;s me Omkar,
        </div>

        {/* Main Heading */}
        <div className="flex flex-row">
          <div className="basis-5/6">
            <h1 className="text-4xl font-medium sm:text-6xl md:text-6xl lg:text-7xl">
              Crafting <span className="text-green-500">purpose driven</span>
              <br />
              experiences that{" "}
              <span className="text-green-500">inspire & engage.</span>
            </h1>
          </div>
          {/* <div className="basis-64">
            <h1>h</h1>
          </div> */}
        </div>

        {/* Description Paragraph and CTA/Socials */}
        <div className="my-8 mb-8 flex items-start justify-between gap-8 md:flex-row-reverse md:items-end">
          {/* Paragraph */}

          <div>
            <p className="max-w-2xl text-base opacity-80 md:text-lg flex-1 dark:opacity-50">
              I work with brands globally to build pixel-perfect, engaging, and
              accessible digital experiences that drive results and achieve
              business goals.
            </p>
          </div>
          <div className="flex-1 mb-6">
            <div className="border-t-2 bg-gray-950 opacity-100"></div>
          </div>
        </div>
        <div className="mb-12 flex items-start justify-between gap-8 md:flex-row-reverse md:items-end">
          {/* Paragraph */}

          <div className="flex-end pr-20">
            <Link
              href="/about" // Replace with actual link
            >
              <Button className="rounded-full ">Know me better</Button>
            </Link>
          </div>
          <div className="flex-1 mb-2">
            <div className="flex flex-row items-center gap-6 text-sm font-medium uppercase opacity-80">
              <a
                href="https://linkedin.com" // Replace with actual links
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                LINKEDIN <MoveUpRight size={16} />
              </a>
              <a
                href="https://github.com" // Replace with actual links
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                GITHUB <MoveUpRight size={16} />
              </a>
              <a
                href="https://instagram.com" // Replace with actual links
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                INSTAGRAM <MoveUpRight size={16} />
              </a>
              <a
                href="mailto:your.email@example.com" // Replace with actual email
                className="hover:underline flex items-center gap-1"
              >
                GMAIL <MoveUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
      <About />
    </section>
  );
}
