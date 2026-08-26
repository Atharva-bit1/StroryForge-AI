import BackgroundAtmosphere from "../components/BackgroundAtmosphere";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StoryWorkflow from "../components/StoryWorkflow";
import CapabilitySection from "../components/CapabilitySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundAtmosphere />
      <Navbar />
      <main>
        <HeroSection />
        <StoryWorkflow />
        <CapabilitySection />
        <Footer />
      </main>
    </>
  );
}
