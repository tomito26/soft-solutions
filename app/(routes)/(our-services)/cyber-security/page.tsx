import type { Metadata } from "next";
import CyberSecurity from "@/components/our-services/cyber-security/cyber-security";
import JsonLd from "@/components/seo/json-ld";
import { faqSchema, serviceBreadcrumb, serviceMetadata, serviceSchema } from "@/lib/seo";
import { serviceFaqs } from "@/lib/constants";

const ROUTE = "/cyber-security";

export const metadata: Metadata = serviceMetadata(ROUTE);

const CyberSecuritypage = () => {
  return (
    <div>
      <JsonLd data={serviceSchema(ROUTE)} />
      <JsonLd data={serviceBreadcrumb(ROUTE)} />
      <JsonLd data={faqSchema(serviceFaqs[ROUTE])} />
      <CyberSecurity />
    </div>
  );
};

export default CyberSecuritypage;
