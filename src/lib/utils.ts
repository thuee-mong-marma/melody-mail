import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function debounce(func: Function, delay: number) {
  let timeout: NodeJS.Timeout;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function(this: unknown, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

export function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}







