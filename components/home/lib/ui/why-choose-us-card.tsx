import React from "react";

const WhyChooseUsCard = ({
  item,
}: {
  item: { title: string; description: string; id: number };
}) => {
  return (
    <div className="flex items-center gap-5 mb-5">
      <h2 className="text-5xl text-[#0423A0] font-bold">0{item.id}</h2>
      <div>
        <h3 className="text-xl text-monochrome font-bold">{item.title}</h3>
        <p className="text-base font-normal">{item.description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
