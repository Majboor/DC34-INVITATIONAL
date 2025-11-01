import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import TournamentDetails from "@/components/TournamentDetails";
import TournamentHighlights from "@/components/TournamentHighlights";
import RegistrationInfo from "@/components/RegistrationInfo";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <InfoSection />
      <TournamentDetails />
      <TournamentHighlights />
      <RegistrationInfo />
      <CallToAction />
    </main>
  );
};

export default Index;
