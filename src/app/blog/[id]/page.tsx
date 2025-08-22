"use client";

import React from "react";
import { notFound } from "next/navigation";
import SectionContainer from "@/components/layouts/SectionContainer";
import ShinyText from "@/components/textanimations/ShinyText";
import { Star, Calendar, ArrowLeft, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts, BlogPost } from "../blogs";
import { CodeBlock } from "@/components/ui/code-block";
import { LoadingProgress } from "@/components/magicui/loading-progress";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const resolvedParams = React.use(params);
  const post: BlogPost | undefined = blogPosts.find(
    (p) => p.id === parseInt(resolvedParams.id)
  );

  if (!post) {
    notFound();
  }

  const parseHighlightLines = (spec: string | undefined): number[] => {
    if (!spec) return [];
    return spec
      .split(",")
      .map((part) => part.trim())
      .flatMap((token) => {
        const range = token.match(/^(\d+)-(\d+)$/);
        if (range) {
          const start = parseInt(range[1], 10);
          const end = parseInt(range[2], 10);
          if (Number.isFinite(start) && Number.isFinite(end) && end >= start) {
            return Array.from({ length: end - start + 1 }, (_, i) => start + i);
          }
          return [];
        }
        const single = parseInt(token, 10);
        return Number.isFinite(single) ? [single] : [];
      });
  };

  // Render markdown content with code blocks using CodeBlock
  const renderContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/);

    return parts.map((part, index) => {
      if (part.startsWith("```")) {
        // ```lang {1,3-5}\ncode...```
        const match = part.match(
          /^```\s*([\w+-]+)?(?:\s*\{([^}]*)\})?\n([\s\S]*?)```$/
        );
        if (match) {
          const language = match[1] || "text";
          const highlightSpec = match[2];
          const code = match[3] || "";
          const highlightLines = parseHighlightLines(highlightSpec);
          return (
            <div key={index} className="my-6">
              <CodeBlock
                language={language}
                filename=""
                code={code}
                highlightLines={highlightLines}
              />
            </div>
          );
        }
      }

      return (
        <div
          key={index}
          className="prose prose-neutral dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: part
              .replace(
                /^## (.*$)/gim,
                '<h2 class="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-neutral-100">$1</h2>'
              )
              .replace(
                /^### (.*$)/gim,
                '<h3 class="text-xl font-semibold mt-6 mb-3 text-neutral-900 dark:text-neutral-100">$1</h3>'
              )
              .replace(
                /^#### (.*$)/gim,
                '<h4 class="text-lg font-medium mt-4 mb-2 text-neutral-900 dark:text-neutral-100">$1</h4>'
              )
              .replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="font-semibold">$1</strong>'
              )
              .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
              .replace(
                /`([^`]+)`/g,
                '<code class="bg-neutral-200 dark:bg-neutral-700 px-1 py-0.5 rounded text-sm font-mono">$1</code>'
              )
              .replace(/^\* (.*$)/gim, '<li class="ml-4">$1</li>')
              .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4">$1. $2</li>')
              .replace(
                /\n\n/g,
                '</p><p class="mb-4 leading-relaxed text-neutral-700 dark:text-neutral-300">'
              )
              .replace(
                /^([^<].*)/gim,
                '<p class="mb-4 leading-relaxed text-neutral-700 dark:text-neutral-300">$1</p>'
              ),
          }}
        />
      );
    });
  };

  return (
    <>
      <LoadingProgress />
      <SectionContainer>
        <div className="relative w-full pt-36">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-8 mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="ml-8 max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star size={18} />
              <ShinyText
                text={post.category}
                disabled={false}
                speed={1.5}
                className="text-lg "
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-full text-xs">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-12 border-l-4 border-green-500 pl-4">
              {post.description}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ml-8 max-w-4xl"
          >
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {renderContent(post.content)}
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </>
  );
};

export default BlogPostPage;
