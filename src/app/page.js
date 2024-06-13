import About from "./components/About";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Pricing />
    </main>
  );
}