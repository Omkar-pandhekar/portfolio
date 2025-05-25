"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "DESIGN",
    "DEVELOPMENT",
    "UI/UX",
    "CREATIVE",
    "INNOVATION",
    "TECHNOLOGY",
  ];

  return (
    <div className="w-full border-y border-gray-200 py-12 overflow-hidden opacity-30 relative my-16">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-[40rem] bg-gradient-to-r from-background to-transparent z-10"></div>
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-[40rem] bg-gradient-to-l from-background to-transparent z-10"></div>

      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
            repeatDelay: 0,
          },
        }}
      >
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex items-center">
            {items.map((item, itemIndex) => (
              <div key={`${index}-${itemIndex}`} className="flex items-center">
                <span className="mx-8 text-3xl font-medium uppercase">
                  {item}
                </span>
                <span className="text-2xl text-gray-400">★</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
