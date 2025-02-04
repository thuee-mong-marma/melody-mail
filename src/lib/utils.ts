import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Cookies from "js-cookie";

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

export const COOKIE_NAME = 'melodymail_history_submission'

export function getCookieData(name: string) {
  const data = Cookies.get(name);
  return data ? JSON.parse(data) : null;
}

export function setCookieData(name: string, data: unknown) {
  Cookies.set(name, JSON.stringify(data), {
    expires: 7,
    path: '/',
  });
}

export function setHistoryData(data: string) {
  const history = getCookieData(COOKIE_NAME);
  if(history && Array.isArray(history)) {
    history.push(data);
    setCookieData(COOKIE_NAME, history);
  } else {
    setCookieData(COOKIE_NAME, [data]);
  }
}
