import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
