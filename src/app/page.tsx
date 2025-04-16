import { Hero } from "../app/components/Hero";
import PropertiesSection from "@/app/components/PropertiesSection";
import Testimonials from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <PropertiesSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
