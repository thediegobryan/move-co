import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Locations from "@/components/locations";

export default function Home() {
  return (
    <main className="text-center">
      <Hero />
      <div className="text-center max-w-[1200px] mx-auto">
        <HowItWorks />
        <Locations />
      </div>
    </main>
  );
}
