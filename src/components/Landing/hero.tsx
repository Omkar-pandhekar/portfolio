"use client";

import Link from "next/link";
import { Hand, MoveUpRight } from "lucide-react";
import Marquee from "./marquee";
import { Button } from "../ui/button";
import About from "./About";
import { motion } from "framer-motion";
import Connect from "../layouts/connect";
import Projects from "./Projects";
import Info from "./Info";
import { siteMetadata } from "@/components/layouts/constants";
import { useState } from "react";

export default function Hero() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      name: "LINKEDIN",
      href: siteMetadata.linkedin,
      icon: <MoveUpRight size={14} className="sm:w-4 sm:h-4" />,
    },
    {
      name: "GITHUB",
      href: siteMetadata.github,
      icon: <MoveUpRight size={14} className="sm:w-4 sm:h-4" />,
    },
    {
      name: "LEETCODE",
      href: siteMetadata.leetcode,
      icon: <MoveUpRight size={14} className="sm:w-4 sm:h-4" />,
    },
    {
      name: "GMAIL",
      href: "mailto:pandhekar.omkar@gmail.com",
      icon: <MoveUpRight size={14} className="sm:w-4 sm:h-4" />,
    },
  ];

  return (
    <section className="relative w-full pt-24">
      {/* Main content area - Centered with horizontal padding and controlled top padding */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        {/* Top intro text */}
        <div className="mb-4 text-lg font-medium md:text-xl flex flex-row gap-2 items-center">
          <motion.div
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
          >
            <Hand className="text-green-500 dark:text-lime-300" />
          </motion.div>
          Hey! It&apos;s me Omkar,
        </div>

        {/* Main Heading */}
        <div className="flex flex-row">
          <div className="basis-5/6">
            <h1 className="text-4xl font-semibold font-clash sm:text-6xl md:text-6xl lg:text-7xl">
              Crafting{" "}
              <span className="text-green-500 dark:text-lime-300">
                purpose driven
              </span>
              <br />
              experiences that{" "}
              <span className="text-green-500 dark:text-lime-300">
                inspire & engage.
              </span>
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
              I specialize in building end-to-end digital experiences, from the
              back-end logic to the user-facing interface, with a focus on
              solving real-world challenges through clean code and intuitive
              design.
            </p>
          </div>
          <div className="flex-1 mb-10">
            <div className="border-t-2 bg-gray-950 opacity-100"></div>
          </div>
        </div>
        <div className="mb-8 md:mb-12 flex flex-col items-start justify-between gap-6 md:flex-row-reverse md:items-end md:gap-8">
          {/* Paragraph */}

          <div className="w-full md:w-auto md:pr-20">
            <Link
              href="/about" // Replace with actual link
            >
              <Button className="w-full md:w-auto rounded-full px-6 py-4 md:px-8 md:py-6 text-sm md:text-base">
                Know me better
              </Button>
            </Link>
          </div>
          <div className="flex-1 mb-2 w-full hidden sm:block">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium uppercase opacity-80">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 w-full sm:w-auto transition-all duration-300"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  animate={{
                    opacity:
                      hoveredLink === null || hoveredLink === link.name
                        ? 1
                        : 0.3,
                    scale: hoveredLink === link.name ? 1.05 : 1,
                    y: hoveredLink === link.name ? -2 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                >
                  {link.name} {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Marquee />
      <Projects />
      <Info />
      {/* <About /> */}
      <Connect />
    </section>
  );
}
