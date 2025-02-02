'use client'

import Link from "next/link";
// import ThemeToggle from "../ThemeToggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


const links = [
  {
    title: "Submit",
    href: "/submit",
  },
  {
    title: "Browse",
    href: "/browse",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  const isCurrentPage = (path: string) => pathname === path;

  return (
    <nav className="flex justify-between items-center border-b">
      <div className="w-full max-w-screen-lg mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="font-handwritten text-2xl">MelodyMail</Link>
        <ul className="space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn(isCurrentPage(link.href) && "font-bold")}>
              {link.title}
            </Link>
          ))}
          {/* <ThemeToggle/> */}
        </ul>
      </div>
    </nav>
  );
};
