"use client";

import Hero from "@/components/Landing/hero";
import { useEffect } from "react";
import Lenis from "lenis";
import { LoadingProgress } from "@/components/magicui/loading-progress";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <LoadingProgress />
      <Hero />
    </>
  );
}
