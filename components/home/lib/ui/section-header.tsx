import { cn } from "@/lib/utils";
import Reveal from "./reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "dark" | "light"; // dark = for light backgrounds, light = for navy backgrounds
  className?: string;
};

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: SectionHeaderProps) => {
  const isLight = tone === "light";
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <p className="text-xs md:text-sm uppercase font-bold tracking-[0.18em] text-gold mb-3">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-2xl md:text-4xl lg:text-5xl font-bold",
          isLight ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-sm md:text-base",
            isLight ? "text-white/80" : "text-brand-slate"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeader;
