import { Hero } from "@/components/Hero";
import { Details } from "@/components/Details";
import { Slideshow } from "@/components/Slideshow";

const HomePage = () => {
  console.log('home', process.env)

  return (
    <>
      <Hero />
      <Details/>
      <Slideshow/>
    </>
  );
}

export default HomePage;
