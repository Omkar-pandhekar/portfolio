"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkle } from "lucide-react";
import SectionContainer from "../layouts/SectionContainer";
import ShinyText from "../textanimations/ShinyText";
import { TypingAnimation } from "../magicui/typing-animation";
import Demo from "../layouts/Demo";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Info() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [lastSelectedItem, setLastSelectedItem] = useState<number>(0);

  const accordionItems = [
    {
      title: "Development",
      content:
        "Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.",
      icon: "</>",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "UI/UX Design",
      content:
        "Creating intuitive user experiences with modern design principles. Focus on user-centered design and beautiful aesthetics.",
      icon: "✏️",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Branding",
      content:
        "Developing unique brand identities and visual systems. Creating memorable experiences that connect with your audience.",
      icon: "🏷️",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <SectionContainer>
      <div className="relative w-full py-12 pt-20">
        <div className="flex items-center gap-2 ml-8 ">
          <Sparkle size={18} className="text-green-500 dark:text-lime-500" />
          <ShinyText
            text="Info"
            disabled={false}
            speed={1.5}
            className="text-xl text-green-500 dark:text-lime-500 "
          />
        </div>
        <div className="w-full">
          <div className="ml-8 -mt-4 mb-4">
            <TypingAnimation className="font-clash tracking-wide font-semibold">
              Areas of Expertise
            </TypingAnimation>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mx-8 py-6">
            <div className="flex-1 flex items-start justify-center">
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-2"
                value={
                  selectedItem !== null ? `item-${selectedItem}` : undefined
                }
                onValueChange={(value) => {
                  if (value) {
                    const index = parseInt(value.replace("item-", ""));
                    setSelectedItem(index);
                    setLastSelectedItem(index);
                  } else {
                    setSelectedItem(null); // No item selected when collapsed
                  }
                }}
              >
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-xl  bg-white dark:bg-zinc-900"
                  >
                    <AccordionTrigger className="px-4 py-3 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-semibold">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-gray-600 dark:text-gray-300">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex-1 flex items-start justify-center overflow-hidden rounded-3xl">
              <motion.img
                src={accordionItems[selectedItem ?? lastSelectedItem].image}
                alt={accordionItems[selectedItem ?? lastSelectedItem].title}
                className="w-full h-80 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Demo />
        </div>
      </div>
    </SectionContainer>
  );
}
