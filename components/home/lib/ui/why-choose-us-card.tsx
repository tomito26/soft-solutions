import { CircleCheck } from "lucide-react";
import React from "react";

const WhyChooseUsCard = ({
  item,
}: {
  item: { title: string; description: string; id: number };
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        <CircleCheck className="h-5 w-5 stroke-gold shrink-0" />
        <h3 className="text-base md:text-lg text-navy font-bold">
          {item.title}
        </h3>
      </div>
      <p className="text-sm md:text-base text-brand-slate ml-7">
        {item.description}
      </p>
    </div>
  );
};

export default WhyChooseUsCard;
