import Marquee from "./Marquee";
import { getPosts } from "@/actions/posts";
import { Posts } from "@prisma/client";

export const Slideshow = async () => {
  const data: Posts[] = await getPosts({page: 1, limit: 20});

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:50s]">
        <Marquee data={data.slice(0, 10)} />
        <Marquee data={data.slice(0, 10)} />
      </div>

      <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:50s]">
        <Marquee data={data.slice(10,20)} isReverse={true} />
        <Marquee data={data.slice(10,20)} isReverse={true} />
      </div>
    </div>

  );
};
