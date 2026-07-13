import { ServiceType } from "@/types/types";
import React from "react";

const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-lg">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 transition-colors duration-300 group-hover:bg-navy">
        <service.icon className="h-6 w-6 stroke-royal transition-colors duration-300 group-hover:stroke-white" />
      </div>
      <h3 className="mb-2 text-base md:text-lg font-semibold text-navy">
        {service.title}
      </h3>
      <p className="text-sm md:text-base text-brand-slate">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
