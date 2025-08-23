"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
} from "@/components/ui/resizable-navbar";
import { navigationLinks } from "./constants";
import { ModeToggle } from "../modeToggle/modeToggle";
import { usePathname } from "next/navigation";

export function NavbarDemo() {
  const pathname = usePathname();

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navigationLinks} />
          <ModeToggle />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center">
              <NavbarLogo />
            </div>
            <div className="flex items-center">
              <ModeToggle />
            </div>
          </MobileNavHeader>
        </MobileNav>
      </Navbar>

      {/* Bottom Navigation Bar - Outside of Navbar component for proper positioning */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-around px-4 py-3">
          <a
            href="/"
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
              pathname === "/"
                ? "text-green-500 dark:text-lime-500"
                : "text-neutral-600 dark:text-neutral-300 hover:text-green-500 dark:hover:text-lime-500"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </a>

          <a
            href="/about"
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
              pathname === "/about"
                ? "text-green-500 dark:text-lime-500"
                : "text-neutral-600 dark:text-neutral-300 hover:text-green-500 dark:hover:text-lime-500"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs font-medium">About</span>
          </a>

          <a
            href="/projects"
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
              pathname === "/projects"
                ? "text-green-500 dark:text-lime-500"
                : "text-neutral-600 dark:text-neutral-300 hover:text-green-500 dark:hover:text-lime-500"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span className="text-xs font-medium">Projects</span>
          </a>

          <a
            href="/contact"
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
              pathname === "/contact"
                ? "text-green-500 dark:text-lime-500"
                : "text-neutral-600 dark:text-neutral-300 hover:text-green-500 dark:hover:text-lime-500"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <span className="text-xs font-medium">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
}
