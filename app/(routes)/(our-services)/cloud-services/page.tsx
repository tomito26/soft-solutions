import type { Metadata } from "next";
import CloudServices from "@/components/our-services/cloud-services/cloud-service";
import JsonLd from "@/components/seo/json-ld";
import { faqSchema, serviceBreadcrumb, serviceMetadata, serviceSchema } from "@/lib/seo";
import { serviceFaqs } from "@/lib/constants";

const ROUTE = "/cloud-services";

export const metadata: Metadata = serviceMetadata(ROUTE);

const CloudServicespage = () => {
  return (
    <div>
      <JsonLd data={serviceSchema(ROUTE)} />
      <JsonLd data={serviceBreadcrumb(ROUTE)} />
      <JsonLd data={faqSchema(serviceFaqs[ROUTE])} />
      <CloudServices />
    </div>
  );
};

export default CloudServicespage;
