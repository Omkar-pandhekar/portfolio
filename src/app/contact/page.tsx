"use client";

import FadeContent from "@/components/animations/FadeContent";
import { siteMetadata } from "@/components/layouts/constants";
import SectionContainer from "@/components/layouts/SectionContainer";
import { LoadingProgress } from "@/components/magicui/loading-progress";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import ShinyText from "@/components/textanimations/ShinyText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Sparkle, Twitter } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import Image from "next/image";
import React, { useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          id: `contact-success-${Date.now()}`,
          duration: 4000,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.", {
          id: `contact-error-${Date.now()}`,
          duration: 5000,
        });
      }
    } catch {
      toast.error("Something went wrong. Please try again.", {
        id: `contact-error-${Date.now()}`,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <LoadingProgress />
      <SectionContainer>
        <FadeContent
          blur={true}
          duration={1500}
          easing="ease-in"
          initialOpacity={0}
        >
          <div className="md:pb-32 xl:pb-32">
            <div className="relative w-full md:pt-48 pt-36 ">
              <div className="flex items-center gap-2 ml-8">
                <Sparkle
                  size={20}
                  className="text-green-500 dark:text-lime-500"
                />
                <ShinyText
                  text="Connect with me"
                  disabled={false}
                  speed={1.5}
                  className="text-xl text-green-500 dark:text-lime-500"
                />
              </div>
              <div className="ml-8">
                <TypingAnimation className="font-clash tracking-wide font-semibold">
                  Let&apos;s Talk
                </TypingAnimation>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-8 mx-8">
              {/* Left: Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col gap-4 h-full"
              >
                <label>
                  Full Name
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border mt-1"
                    required
                    autoComplete="off"
                  />
                </label>
                <label>
                  Email
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl mt-1.5"
                    required
                    autoComplete="off"
                  />
                </label>
                <label className="flex-1 flex flex-col">
                  Message
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl mt-1.5 flex-1"
                    rows={4}
                    required
                    autoComplete="off"
                  ></Textarea>
                </label>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-24 py-2 rounded-full mt-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>

              {/* Right: Profile Card */}
              <div className=" flex-1 rounded-2xl p-8 flex flex-col justify-between mt-1 dark:bg-zinc-900 bg-white">
                <div className="flex flex-col gap-4 -mt-2">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 bg-green-500 dark:bg-lime-500 rounded-full"></span>
                    <span className="text-sm bg-green-300 dark:bg-lime-100 dark:bg-opacity-20 bg-opacity-20 rounded-full px-3 py-1">
                      Available for work
                    </span>
                  </div>
                  <Image
                    src="/assets/profile.jpeg"
                    alt="Profile"
                    width={280}
                    height={500}
                    className="w-28 h-28 rounded-full border-4 border-spacing-3 object-cover"
                  />
                  <p className="text-xl font-clash leading-relaxed opacity-80 text-justify">
                    My inbox is always open. Whether you have a project or just
                    want to say Hi. I would love to hear from you. Feel free to
                    contact me and I&apos;ll get back to you.
                  </p>
                </div>
                <div className="flex gap-4 opacity-60 text-2xl pt-4">
                  {/* Replace # with your social links */}
                  <a href={siteMetadata.linkedin}>
                    <i className="fab fa-linkedin">
                      <Linkedin size={20} />
                    </i>
                  </a>
                  <a href={siteMetadata.github}>
                    <i className="fab fa-github">
                      <Github size={20} />
                    </i>
                  </a>
                  <a href={siteMetadata.leetcode}>
                    <i className="fab fa-instagram">
                      <SiLeetcode size={20} />
                    </i>
                  </a>

                  <a href={siteMetadata.twitter}>
                    <i className="fab fa-twitter">
                      <Twitter size={20} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>
      </SectionContainer>
      {/* <SectionContainer>
        <div className="mx-8 mt-20">
          <div className="flex items-center gap-2 mb-2">
            <Sparkle size={18} className="text-green-500 dark:text-lime-500" />
            <ShinyText
              text="FAQ"
              disabled={false}
              speed={1.5}
              className="text-xl text-green-500 dark:text-lime-500"
            />
          </div>
          <p className="text-sm opacity-70 mb-4">
            Quick answers about my background and how I work.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="education">
              <AccordionTrigger className="rounded-xl  bg-white dark:bg-zinc-900 p-6">
                What is your education background?
              </AccordionTrigger>
              <AccordionContent>
                I hold a degree in Computer Science with a focus on software
                engineering. I continue learning through courses, papers, and
                hands-on projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="languages">
              <AccordionTrigger>
                Which languages and tools do you use?
              </AccordionTrigger>
              <AccordionContent>
                JavaScript/TypeScript, React/Next.js, Node.js, Tailwind CSS.
                Comfortable with REST/GraphQL, databases, CI/CD, and cloud
                deployments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="development">
              <AccordionTrigger>
                How do you approach development?
              </AccordionTrigger>
              <AccordionContent>
                I start with clear goals and constraints, design small iterative
                milestones, maintain strong communication, and prioritize
                performance, accessibility, and maintainability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionContainer> */}
    </>
  );
}
