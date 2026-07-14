import { ogAlt, ogContentType, ogImage, ogSize } from "@/lib/og-image";

export const alt = ogAlt("IT Solutions in Nairobi, Kenya");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage(
    "IT Solutions for Modern Business",
    "Software · Cloud · Cyber Security · Networking"
  );
}
