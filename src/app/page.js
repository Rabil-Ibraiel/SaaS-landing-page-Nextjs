import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Pricing from "@/sections/Pricing";
import Product from "@/sections/Product";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Product />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
