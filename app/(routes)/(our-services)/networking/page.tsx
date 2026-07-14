import type { Metadata } from "next";
import Networking from "@/components/our-services/networking-services/networking";
import JsonLd from "@/components/seo/json-ld";
import { faqSchema, serviceBreadcrumb, serviceMetadata, serviceSchema } from "@/lib/seo";
import { serviceFaqs } from "@/lib/constants";

const ROUTE = "/networking";

export const metadata: Metadata = serviceMetadata(ROUTE);

const Networkingpage = () => {
  return (
    <div>
      <JsonLd data={serviceSchema(ROUTE)} />
      <JsonLd data={serviceBreadcrumb(ROUTE)} />
      <JsonLd data={faqSchema(serviceFaqs[ROUTE])} />
      <Networking />
    </div>
  );
};

export default Networkingpage;
