"use client";

import { siteMetadata } from "@/components/layouts/constants";
import SectionContainer from "@/components/layouts/SectionContainer";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import ShinyText from "@/components/textanimations/ShinyText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Sparkle, Twitter } from "lucide-react";
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
    <SectionContainer>
      <div className="relative w-full mt-48">
        <div className="flex items-center gap-2 ml-8">
          <Sparkle size={20} color="#16a34a" />
          <ShinyText
            text="Connect with me"
            disabled={false}
            speed={1.5}
            className="text-xl text-green-600"
          />
        </div>
        <div className="ml-8">
          <TypingAnimation className="font-inter tracking-normal font-bold">
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
        <div className=" max-h-80 flex-1 rounded-2xl p-8 flex flex-col justify-between mt-1 dark:bg-zinc-900 ">
          <div className="flex flex-col gap-4 -mt-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
              <span className="text-green-400 text-sm bg-green-500 bg-opacity-20 rounded-full px-2 py-1">
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
            <p className="text-lg/2 leading-relaxed opacity-60">
              My inbox is always open. Whether you have a project or just want
              to say Hi. I would love to hear from you. Feel free to contact me
              and I&apos;ll get back to you.
            </p>
          </div>
          <div className="flex gap-4 text-gray-300 text-2xl pt-4">
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
    </SectionContainer>
  );
}
