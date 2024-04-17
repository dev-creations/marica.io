import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let debounceTimer: NodeJS.Timeout;
export function debounce(fn: () => void, delay = 600) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(fn, delay);
}

export function getDefaultsFromZodSchema<Schema extends z.AnyZodObject>(
  schema: Schema
) {
  const defaults = Object.fromEntries(
    Object.entries(schema.shape as object).map(([key, value]) => {
      if (value instanceof z.ZodDefault)
        return [key, value._def.defaultValue()];
      return [key, undefined];
    })
  );

  return defaults;
}
