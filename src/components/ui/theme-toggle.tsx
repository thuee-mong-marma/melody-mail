"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant="outline" size="icon" className="text-base border-none shadow-none bg-transparent hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <span className="capitalize">{theme}</span>
        <span className="sr-only">Toggle theme</span>
      </Button>
  );


}
