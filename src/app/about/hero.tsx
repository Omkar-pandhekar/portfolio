import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="space-y-4 pt-5 pb-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-0">
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
            Omkar Pandhekar
          </h1>
          <p className="text-lg md:text-xl text-neutral-900 dark:text-neutral-100 font-medium pl-1">
            Software Developer
          </p>
        </div>

        <div className="flex mr-10">
          <div className="relative">
            <Image
              src="/assets/profile.jpeg"
              alt="Omkar Pandhekar"
              width={100}
              height={100}
              className="rounded-full object-cover w-24 h-24 grayscale"
              priority
            />
          </div>
        </div>
      </div>

      <div className="space-y-6 text-lg text-neutral-600   dark:text-neutral-300 leading-relaxed">
        <p>
          I&apos;m a software developer with a keen focus on creating beautiful
          and intuitive user interfaces. I specialize in React.js, Next.js,
          TypeScript, and Tailwind to build scalable and efficient web
          applications.
        </p>
        <p>
          I bring extensive experience in web development, having worked with
          companies like{" "}
          <span className="text-green-400 underline decoration-green-400 underline-offset-4">
            Code and Theory
          </span>
          ,{" "}
          <span className="text-green-400 underline decoration-green-400 underline-offset-4">
            Cell 5
          </span>
          , and{" "}
          <span className="text-green-400 underline decoration-green-400 underline-offset-4">
            Create
          </span>
          . Now I am a Software Developer at{" "}
          <span className="text-green-400 underline decoration-green-400 underline-offset-4">
            Aphex
          </span>
          , where we are building the future of construction software planning.
        </p>
      </div>
    </div>
  );
};

export default Hero;
