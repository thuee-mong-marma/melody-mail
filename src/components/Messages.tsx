"use client";

import { useEffect, useState } from "react";
import { MessageCard } from "@/components/MessageCard";
import { getPosts } from "@/actions/posts";
import { Posts } from "@prisma/client";
import { useInView } from "react-intersection-observer";

export const Messages = ({
  initialData,
  searchQuery,
}: {
  initialData: Posts[];
  searchQuery: string;
}) => {
  const [messages, setMessages] = useState<Posts[]>(initialData);
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
      setMessages((prev: Posts[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...messages,
      ]);
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {messages.map((item) => (
        <MessageCard key={item.id} data={item} className="max-w-full" />
      ))}
      <div ref={ref} />
    </div>
  );
};
