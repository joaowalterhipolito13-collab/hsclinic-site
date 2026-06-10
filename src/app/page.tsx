import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
      </main>
    </div>
  );
}
