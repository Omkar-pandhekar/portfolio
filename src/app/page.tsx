import FadeContent from "@/components/animations/FadeContent";
import Hero from "@/components/Landing/hero";

import { LoadingProgress } from "@/components/magicui/loading-progress";

export default function Home() {
  return (
    <>
      <LoadingProgress />
      <FadeContent
        blur={true}
        duration={500}
        easing="ease-in"
        initialOpacity={0}
      >
        <Hero />
      </FadeContent>
    </>
  );
}
