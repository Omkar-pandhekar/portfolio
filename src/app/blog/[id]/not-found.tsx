import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-neutral-900 dark:text-neutral-100">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
          Blog Post Not Found
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
          The blog post you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>
      </div>
    </div>
  );
}
