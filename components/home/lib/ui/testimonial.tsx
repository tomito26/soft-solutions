import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const Testimonial = ({
  testimony,
}: {
  testimony: {
    id: number;
    testimony: string;
    client: {
      name: string;
      title: string;
      company: string;
      profile_photo_url: string;
    };
  };
}) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-8 shadow-sm">
      <div>
        <Quote className="h-8 w-8 fill-gold/20 stroke-gold" />
        <p className="mt-5 text-base md:text-lg leading-relaxed text-ink">
          &ldquo;{testimony.testimony}&rdquo;
        </p>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimony.client.profile_photo_url}
            alt={`${testimony.client.name} profile photo`}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-navy">{testimony.client.name}</p>
          <p className="text-sm text-brand-slate">
            {testimony.client.title}, {testimony.client.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
