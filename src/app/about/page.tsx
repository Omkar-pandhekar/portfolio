"use client";

import Marqee from "./marqee";

import SectionContainer from "@/components/layouts/SectionContainer";
import Education from "./education";
import Starting from "./starting";
import About from "./about";
import Connect from "@/components/layouts/connect";
import { LoadingProgress } from "@/components/magicui/loading-progress";
import FadeContent from "@/components/animations/FadeContent";

export default function AboutPage() {
  return (
    <div>
      <LoadingProgress />
      <FadeContent
        blur={true}
        duration={500}
        easing="ease-in"
        initialOpacity={0}
      >
        <Starting />
        <Marqee />
        <SectionContainer>
          <About />
          {/* <Education /> */}
          <Connect />
        </SectionContainer>
      </FadeContent>
    </div>
  );
}
