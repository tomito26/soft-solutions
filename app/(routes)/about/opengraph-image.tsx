import { ogAlt, ogContentType, ogImage, ogSize } from "@/lib/og-image";

export const alt = ogAlt("About Us");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage(
    "About Soft Solutions",
    "A Nairobi team empowering businesses through innovative IT"
  );
}
