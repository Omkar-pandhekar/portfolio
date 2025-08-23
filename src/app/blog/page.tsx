"use client";

import React from "react";
import SectionContainer from "@/components/layouts/SectionContainer";
import ShinyText from "@/components/textanimations/ShinyText";
import { Star, Calendar, ArrowRight, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "./blogs";

const BlogPage = () => {
  return (
    <SectionContainer>
      <div className="relative w-full pt-48">
        {/* Header */}
        <div className="flex items-center gap-2 ml-8">
          <Sparkle size={18} className="text-green-500 dark:text-lime-500" />
          <ShinyText
            text="Blog"
            disabled={false}
            speed={1.5}
            className="text-xl text-green-500 dark:text-lime-500"
          />
        </div>

        {/* Blog Posts */}
        <div className="mt-8 flex justify-center">
          <div className="max-w-7xl w-full px-8">
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-lg border border-neutral-200/60 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm p-6 hover:bg-white/60 dark:hover:bg-neutral-900/60 transition-all duration-300"
                >
                  <Link href={`/blog/${post.id}`} className="block">
                    <div className="flex flex-col space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 ">
                            {post.title}
                          </h2>
                        </div>
                        <ArrowRight className="h-5 w-5 text-neutral-400 " />
                      </div>

                      {/* Description */}
                      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {post.description}
                      </p>

                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span className="px-2 py-1 bg-gray-300 dark:bg-zinc-800 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-300 dark:bg-zinc-800 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 font-medium text-sm">
                        <span>Read article</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default BlogPage;
