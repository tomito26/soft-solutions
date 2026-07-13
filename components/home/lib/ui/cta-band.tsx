import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "./reveal";

type CtaBandProps = {
  title?: string;
  subtitle?: string;
};

/** Closing conversion band shown before the footer. */
const CtaBand = ({
  title = "Ready to transform your IT?",
  subtitle = "Let's talk about how Soft Solutions Technologies can help you build, secure, and scale your technology.",
}: CtaBandProps) => {
  return (
    <section className="bg-navy container-x py-20 md:py-24">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h2>
        <p className="mt-4 text-sm md:text-base text-white/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/contact-us">
            <Button size="lg" variant="gold">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="heroOutline">
              Learn more
            </Button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default CtaBand;
