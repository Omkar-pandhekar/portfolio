import Hero from "@/components/Landing/hero";

import { LoadingProgress } from "@/components/magicui/loading-progress";

export default function Home() {
  return (
    <>
      <LoadingProgress />
      <Hero />
    </>
  );
}
