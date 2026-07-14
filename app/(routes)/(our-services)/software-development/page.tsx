import type { Metadata } from "next";
import SoftwareDevelopment from "@/components/our-services/software-Services/software-development";
import JsonLd from "@/components/seo/json-ld";
import { faqSchema, serviceBreadcrumb, serviceMetadata, serviceSchema } from "@/lib/seo";
import { serviceFaqs } from "@/lib/constants";

const ROUTE = "/software-development";

export const metadata: Metadata = serviceMetadata(ROUTE);

const SoftwareDevelopmentpage = () => {
  return (
    <div>
      <JsonLd data={serviceSchema(ROUTE)} />
      <JsonLd data={serviceBreadcrumb(ROUTE)} />
      <JsonLd data={faqSchema(serviceFaqs[ROUTE])} />
      <SoftwareDevelopment />
    </div>
  );
};

export default SoftwareDevelopmentpage;
