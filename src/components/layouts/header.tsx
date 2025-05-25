"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "./constants";
import MobileNav from "./mobile-nav";
import SectionContainer from "./SectionContainer";
import { ModeToggle } from "../modeToggle/modeToggle";

export default function Header() {
  const pathName = usePathname();

  return (
    <SectionContainer>
      <header className="z-40 bg-transparent md:pb-10 md:pt-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <Link
              href="/"
              className={classNames(
                "horizontal-underline hidden text-3xl font-extrabold sm:block",
                {
                  "horizontal-underline-active": pathName === "/",
                }
              )}
              aria-label="d."
            >
              O.
            </Link>
          </div>
          <div className="flex items-center space-x-4 text-base leading-5">
            <div className="hidden space-x-12 sm:flex">
              {navigationLinks.map(({ title, href }) => {
                const active = pathName?.includes(href);
                return (
                  <Link
                    prefetch
                    key={title}
                    href={href}
                    className={classNames(
                      "horizontal-underline text-base mx-2",
                      {
                        "horizontal-underline-active": active,
                      }
                    )}
                    aria-label={title}
                  >
                    <span className=" font-semibold tracking-wide">
                      {title}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </SectionContainer>
  );
}
