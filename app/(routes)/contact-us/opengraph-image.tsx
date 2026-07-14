import { ogAlt, ogContentType, ogImage, ogSize } from "@/lib/og-image";

export const alt = ogAlt("Contact Us");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Get in Touch", "Westlands, Nairobi · We reply within a day");
}
