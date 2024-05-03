import Footer from "@/components/Footer";
import GetStartedFree from "@/components/GetStartedFree";
import HeroSection from "@/components/Hero";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import SecondSection from "@/components/SecondSection";

export default function Home() {
  return (
    // <main className="relative">
    //   <NavBar />

    //   <div className="flex min-h-screen flex-col items-center">
    //     <div className="w-full bg-gradient-to-b from-transparent to-zinc-950">
    //       <section className="flex flex-col items-center justify-center space-y-4 pt-4 sm:pt-24 w-full bg-[url('/grid.svg')]">
    //         <Hero />
    //         <div className="w-full bg-gradient-to-b from-transparent to-zinc-950 h-24"></div>
    //       </section>
    //     </div>
    //   </div>
    // </main>
    <main>
      <div className="">
        <NavBar />
        <HeroSection />
        <SecondSection />
        <GetStartedFree />
        <Footer />
      </div>
    </main>
  );
}
