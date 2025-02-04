'use client'

import Image from "next/image";
import Link from "next/link";
import { cn, truncateText } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Posts } from "@prisma/client";

interface MessageCardProps {
  data: Posts,
  className?: string;
}

export const MessageCard = ({ data, className }: MessageCardProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/details/${data.id}`);
  }

  return (
    <div
      className={cn("flex flex-col justify-between max-w-sm w-full h-full border rounded-xl overflow-hidden bg-card shadow-md", className)}
      onClick={onClick}
    >

      <div className="cursor-pointer flex flex-col gap-4 w-full h-full p-4 transition-colors duration-200 hover:bg-gray-50">
        <div className="flex items-center">
          <span className="text-sm text-gray-600">To:&nbsp;</span>
          <span className="font-medium text-sm text-gray-800">
            {data.recipient}
          </span>
        </div>
        <div className="pb-1.5 justify-self-start">
          <p className="font-handwritten text-xl text-gray-800 sm:text-2xl">
            {truncateText(data.message, 80)}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 p-4 border-t bg-gray-100">
        <div className="flex items-center gap-2 w-full">
          <div className="flex-shrink-0">
            <Image
              src={data.song_image}
              alt={data.song_name}
              width={40}
              height={40}
              className="rounded-lg max-w-10 max-h-10"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-950">{truncateText(data.song_name, 20)}</p>
            <p className="text-xs text-gray-500">{data.song_artist}</p>
          </div>
        </div>

        <Link href={`https://open.spotify.com/track/${data.song_id}`} rel="noopener noreferrer">
          <Image
            src="/spotify.svg"
            width={24}
            height={24}
            alt="Spotify icon"
            className="max-w-6 max-h-6"
          />
        </Link>
      </div>
    </div>
  );
};
