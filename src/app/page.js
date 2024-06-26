import About from "./components/About";
import { Faqs } from "./components/Faqs";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import { ShowWspBtn } from "./utils/showWspBtn";

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <About />
      <Pricing />
      <Faqs />
      <ShowWspBtn />
    </main>
  )
}