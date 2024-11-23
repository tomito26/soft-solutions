import React from "react";
import Image from "next/image";
import { MessagesSquare } from "lucide-react";

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
    <div className="bg-white relative md:h-[250px] flex items-center rounded-xl">
      <div className="absolute -top-[15%] left-[40%] md:left-[45%]   ">
        <div className="relative h-[80px] w-[80px] md:h-[90px] md:w-[90px] rounded-full ">
          <Image
            src={testimony.client.profile_photo_url}
            alt={`${testimony.client.name} profile photo`}
            fill
            className="absolute rounded-full  object-cover"
          />
        </div>
      </div>

      <div className="pl-[20px] pr-[20px] pt-[40px] pb-4 ">
        <MessagesSquare className="h-6 w-6 stroke-[#0423A0] mb-3"/>
        <p className="text-sm md:text-base font-normal mb-3">{testimony.testimony}</p>
        <p className="text-sm md:text-base font-bold text-[#0423A0]">{testimony.client.name}</p>
        <p className="text-sm md:text-base font-normal">{testimony.client.title}/{testimony.client.company}</p>
      </div>
    </div>
  );
};

export default Testimonial;
