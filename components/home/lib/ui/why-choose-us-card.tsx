import { CircleCheck } from "lucide-react";
import React from "react";

const WhyChooseUsCard = ({
  item,
}: {
  item: { title: string; description: string; id: number };
}) => {
  return (
    <div className="mb-2">
      <div>
        <div className="flex items-center gap-2">
          <CircleCheck className="h-5 w-5 stroke-[#0423A0] shrink-0" />
          <h3 className="text-base md:text-lg text-monochrome font-bold">
            {item.title}
          </h3>
        </div>
        <p className="text-sm md:text-base font-normal ml-7">{item.description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
