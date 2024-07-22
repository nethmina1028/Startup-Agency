import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="relative poppins  md:px-[9rem]">
        <Navbar />

    <div className="px-4 flex flex-col gap-[7.69rem]">
        <Hero />
    </div>

    </main>
  );
}
