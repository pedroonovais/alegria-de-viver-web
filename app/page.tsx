import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import ProjectsSection from "./components/ProjectsSection";
import WhyContributeSection from "./components/WhyContributeSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

/**
 * Página inicial da Associação Alegria de Viver
 */
export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Header />
      <HeroSection />
      <MissionSection />
      <ProjectsSection />
      <WhyContributeSection />
      <CTASection />
      <Footer />
    </div>
  );
}
