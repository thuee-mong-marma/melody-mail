"use client";

import { useEffect, useState } from "react";
import { MessageCard } from "@/components/MessageCard";
import { getPosts } from "@/actions/posts";
import { Posts } from "@prisma/client";
import { useInView } from "react-intersection-observer";
import { Skeleton } from "@/components/ui/skeleton";

export const Messages = ({ searchQuery }: { searchQuery: string }) => {
  const [messages, setMessages] = useState<Posts[]>([]);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  const loadMoreMessages = async () => {
    const next = page + 1;
    const messages = await getPosts({
      page: next,
      limit: 12,
      query: searchQuery,
    });

    if (messages && messages.length) {
      setPage(next);
      setMessages((prev: Posts[] | undefined) => [...(prev?.length ? prev : []), ...messages]);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMoreMessages();
    }
    //eslint-disable-next-line
  }, [inView]);

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await getPosts({ query: searchQuery });
      if (messages && messages.length) {
        setPage(1);
        setMessages(messages);
      }
    };

    fetchMessages();
  }, [searchQuery]);

  if (!messages || !messages.length) return <MessagesSkeleton />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {messages.map((item) => (
        <MessageCard key={item.id} data={item} className="max-w-full" />
      ))}
      <div ref={ref} />
    </div>
  );
};

const MessagesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <MessageCardSkeleton />
      <MessageCardSkeleton />
      <MessageCardSkeleton />
      <MessageCardSkeleton />
      <MessageCardSkeleton />
      <MessageCardSkeleton />
    </div>
  );
};

const MessageCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full border rounded-xl overflow-hidden bg-card shadow-md max-w-full">
      <div className="cursor-pointer flex flex-col gap-4 w-full h-full min-h-[170px] p-4 transition-colors duration-200 hover:bg-gray-50">
        <Skeleton className="w-14 h-5" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 p-4 border-t bg-gray-100">
        <div className="flex items-center gap-2">
          <Skeleton className="w-10 h-10" />
          <div className="flex flex-col gap-1">
            <Skeleton className="w-16 h-3" />
            <Skeleton className="w-24 h-3" />
          </div>
        </div>
        <Skeleton className="w-6 h-6 rounded-full" />
      </div>
    </div>
  );
};
