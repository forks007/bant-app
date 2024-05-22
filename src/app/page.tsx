import About from "@/components/about";
import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Slider from "@/components/slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Slider />
      <Blogs />
      <Footer />
    </main>
  );
}
