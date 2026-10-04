import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Craftsmanship from "@/components/sections/Craftsmanship";
import Collection from "@/components/sections/Collection";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Craftsmanship />
        <Collection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
