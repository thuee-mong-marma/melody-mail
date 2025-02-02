import { mockData } from "@/mock-data";
import Marquee from "./Marquee";

export const Slideshow = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:50s]">
        <Marquee data={mockData.slice(0, 10)} />
        <Marquee data={mockData.slice(0, 10)} />
      </div>
      <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:50s]">
        <Marquee data={mockData.slice(10,20)} isReverse={true} />
        <Marquee data={mockData.slice(10,20)} isReverse={true} />
      </div>
    </div>

  );
};
