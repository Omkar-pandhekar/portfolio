"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const ScrollTextReveal = ({
  words,
  className,
  revealSpeed = 0.05,
  unrevealSpeed = 0.02,
}: {
  words: string;
  className?: string;
  revealSpeed?: number;
  unrevealSpeed?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [revealedLetters, setRevealedLetters] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  // Throttled scroll direction detection
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (Math.abs(currentScrollY - lastScrollY) > 5) {
      // Threshold to avoid micro-movements
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  // Detect scroll direction
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Intersection Observer to detect when text is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  // Handle text reveal/unreveal based on scroll direction
  useEffect(() => {
    if (!isVisible) return;

    let intervalId: NodeJS.Timeout;

    if (scrollDirection === "down") {
      // Reveal text letter by letter
      intervalId = setInterval(() => {
        setRevealedLetters((prev) => {
          if (prev < words.length) {
            return prev + 1;
          }
          return prev;
        });
      }, revealSpeed * 10);
    } else if (scrollDirection === "up") {
      // Unreveal text letter by letter
      intervalId = setInterval(() => {
        setRevealedLetters((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
          return prev;
        });
      }, unrevealSpeed * 10);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [scrollDirection, isVisible, words.length, revealSpeed, unrevealSpeed]);

  // Reset revealed letters when text becomes invisible
  useEffect(() => {
    if (!isVisible) {
      setRevealedLetters(0);
    }
  }, [isVisible]);

  const renderLetters = () => {
    const letters = words.split("");

    return letters.map((letter, idx) => {
      const isRevealed = idx < revealedLetters;

      return (
        <motion.span
          key={idx}
          className="inline-block"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{
            opacity: isRevealed ? 1 : 0,
            y: isRevealed ? 0 : 20,
            scale: isRevealed ? 1 : 0.8,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: isRevealed ? idx * 0.02 : 0,
          }}
          style={{
            display: "inline-block",
            minWidth: letter === " " ? "0.5em" : "auto",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      );
    });
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          ref={textRef}
          className="dark:text-white text-black text-2xl leading-snug tracking-wide"
        >
          <AnimatePresence mode="wait">{renderLetters()}</AnimatePresence>
        </div>
      </div>
    </div>
  );
};
