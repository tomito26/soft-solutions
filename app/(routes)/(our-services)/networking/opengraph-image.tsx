import { ogAlt, ogContentType, ogImage, ogSize } from "@/lib/og-image";
import { servicePagesSeo } from "@/lib/seo";

const service = servicePagesSeo["/networking"];

export const alt = ogAlt(service.name);
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage(
    service.name,
    "Secure, efficient networks — designed, deployed & maintained"
  );
}
