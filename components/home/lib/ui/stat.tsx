"use client";

import React from "react";

type StatProps = {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
};

/** Animated count-up metric that runs once when scrolled into view. */
const Stat = ({ icon, value, suffix = "", label }: StatProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex items-center gap-3">
      {icon}
      <div className="flex flex-col">
        <p className="font-bold text-4xl md:text-5xl text-white tabular-nums">
          {display}
          {suffix}
        </p>
        <p className="text-sm md:text-base font-medium text-white/80">{label}</p>
      </div>
    </div>
  );
};

export default Stat;
