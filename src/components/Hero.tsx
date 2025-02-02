import Link from "next/link";
import { Button, ButtonProps } from "@/components/ui/button";
import { PenLine, Search } from "lucide-react";

const buttonContent = [
  {
    icon: PenLine,
    text: "Tell your story",
    href: "/submit",
    variant: "default",
  },
  {
    icon: Search,
    text: "Browse the stories",
    href: "/browse",
    variant: "outline",
  },
];

export const Hero = () => {
  return (
    <div className="hero space-y-6 text-center w-full sm:max-w-[70%] mx-auto pt-10 px-4 sm:px-0">
      <h1 className="font-handwritten text-4xl sm:text-6xl">
        a bunch of the unspoken words, expressed through the song
      </h1>
      <p className="text-gray-500 text-sm sm:text-lg">
        Share your unspoken message through the song.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-2">
        {buttonContent.map((button) => (
          <Link key={button.text} href={button.href}>
            <Button
              variant={button.variant as ButtonProps["variant"]}
              className="w-full text-base p-6"
            >
              {button.text}
              <button.icon />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
