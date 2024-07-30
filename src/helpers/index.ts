import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Truthy<T> = T extends false | "" | 0 | null | undefined ? never : T; // from lodash

/**
 * Used to filter out falsey values
 */
export function truthy<T>(value: T): value is Truthy<T> {
  return !!value;
}
