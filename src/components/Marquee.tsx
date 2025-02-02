import { MessageCard } from "./MessageCard";
import { cn } from "@/lib/utils";
import { Posts } from "@prisma/client";

const Marquee = ({ data, isReverse = false } : { data: Posts[], isReverse?: boolean }) => {
  return (
    <div
      className={cn(
        "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]",
        isReverse && "[animation-direction:reverse]"
      )}
    >
      {data.map((item) => (
        <MessageCard key={item.id} data={item} className="pointer-events-none"/>
      ))}
    </div>
  );
};

export default Marquee;
