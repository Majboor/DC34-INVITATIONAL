import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RegistrationDialog } from "@/components/RegistrationDialog";
import heroImage from "@/assets/hero-softball.jpg";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-5xl text-center animate-fade-in">
          {/* Main Headline */}
          <h1 className="mb-6 font-headline text-7xl font-black uppercase leading-none tracking-tighter text-white md:text-8xl lg:text-9xl">
            DC34
            <br />
            <span className="text-secondary">INVITATIONAL</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 font-body text-xl font-medium uppercase tracking-wide text-white/90 md:text-2xl">
            Premier Fastpitch Tournament • Elite Competition
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              variant="hero" 
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => setIsDialogOpen(true)}
            >
              View Tournaments
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => setIsDialogOpen(true)}
            >
              Register Now
            </Button>
          </div>

          {/* Tag Line */}
          <p className="mt-8 font-body text-sm font-semibold uppercase tracking-widest text-white/70">
            #BeTheHunter
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-white/30">
          <div className="mt-2 h-2 w-2 mx-auto rounded-full bg-white/50" />
        </div>
      </div>

      {/* Registration Dialog */}
      <RegistrationDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default Hero;
