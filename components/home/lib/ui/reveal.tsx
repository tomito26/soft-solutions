"use client";

import { cn } from "@/lib/utils";
import React from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** delay in ms before the reveal transition starts */
  delay?: number;
  as?: "div" | "section" | "li";
};

/**
 * Lightweight scroll-reveal: fades + lifts its children into view once,
 * using IntersectionObserver. Respects `prefers-reduced-motion` (renders
 * fully visible with no transition).
 */
const Reveal = ({ children, className, delay = 0, as = "div" }: RevealProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Comp = as as React.ElementType;
  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
