import Footer from "@/components/Footer";
import Header from "@/components/Headers";
import HeroSection from "@/components/HeroSection";
import TestCard from "@/components/TestCard";

export default function Home() {
  return (
    <main className="px-40">
      <Header />
      <HeroSection />
      <TestCard />
      <Footer />
    </main>
  );
}
