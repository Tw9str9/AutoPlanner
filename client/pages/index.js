import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Reviews from "@/components/home/Reviews";
import Gallery from "@/components/home/Gallery";
import Cars from "@/components/home/Cars";

export default function Home() {
  return (
    <>
      <Hero />
      <Cars />
      <Services />
      <Reviews />
      <Gallery />
    </>
  );
}
