import { ogAlt, ogContentType, ogImage, ogSize } from "@/lib/og-image";
import { servicePagesSeo } from "@/lib/seo";

const service = servicePagesSeo["/software-development"];

export const alt = ogAlt(service.name);
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage(
    service.name,
    "Custom software, web & mobile — built around your business"
  );
}
