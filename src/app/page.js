import HeroCard from "./components/HeroCard";
import softwares from "@/lib/softwares";
import AboutContainer from "./components/AboutContainer";
import Carousel from "./components/Carousel";
import Politics from "./components/Politics";

export default async function Home() {
  const slides = softwares.map((card) => {
    return card;
  });
  return (
    <main>
      <HeroCard />
      <Carousel Slide={slides} />
      <AboutContainer />
      <Politics />
    </main>
  );
}
