export const waLink = (phone: string, msg = 'Hi, I want balloon decor') =>
  `https://wa.me/${phone.replace(/\D/g,'')}?text=${encodeURIComponent(msg)}`;
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
