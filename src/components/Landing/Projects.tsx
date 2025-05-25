import { FocusCards } from "@/components/ui/focus-cards";
import {projects} from "@/components/layouts/constants";
import { Star } from "lucide-react";
import ShinyText from "../textanimations/ShinyText";
import SectionContainer from "../layouts/SectionContainer";
import { Button } from "../ui/button";
 
export default function Projects() {
  
 
  return (
    <SectionContainer>
  <div className="relative w-full mt-32">
    <div className="flex items-center gap-2 ml-8">
          <Star size={18} color="#16a34a" />
          <ShinyText
            text="Projects"
            disabled={false}
            speed={3}
            className="text-xl text-green-600"
          />
    </div>
    <div className="w-full">
          <FocusCards cards={projects}  />
    </div>
    <div className="flex justify-center my-6 ">
      <Button className="rounded-full ">More Projects</Button>
    </div>
  </div>
  </SectionContainer>);