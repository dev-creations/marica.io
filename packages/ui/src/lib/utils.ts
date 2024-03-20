import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let debounceTimer: NodeJS.Timeout;
export function debounce(fn: () => void, delay = 600) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(fn, delay);
}
