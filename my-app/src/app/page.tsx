import Block from "./components/Block";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main className="relative poppins  md:px-[9rem]">
        <Navbar />

    <div className="px-4 flex flex-col gap-[7.69rem]">
        <Hero />
        <Service />
        <Block />
        <Testimonials />
        <News />
        <Footer />
    </div>

    </main>
  );
}
