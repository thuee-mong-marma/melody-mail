'use client'

import { Button } from "./ui/button";
import { useTheme } from "next-themes"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="hover:bg-transparent dark:hover:bg-transparent text-base">
      <span className='capitalize hover:font-bold'>{theme}</span>
    </Button>
  );
};


export default ThemeToggle;