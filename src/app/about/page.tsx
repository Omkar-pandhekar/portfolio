"use client";

import Marqee from "./marqee";

import SectionContainer from "@/components/layouts/SectionContainer";
import Education from "./education";
import Starting from "./starting";
import About from "./about";
import Connect from "@/components/layouts/connect";
import { LoadingProgress } from "@/components/magicui/loading-progress";

export default function AboutPage() {
  return (
    <div>
      <LoadingProgress />
      <SectionContainer>
        <Starting />
      </SectionContainer>
      <Marqee />
      <About />
      <Education />
      <Connect />
    </div>
  );
}
