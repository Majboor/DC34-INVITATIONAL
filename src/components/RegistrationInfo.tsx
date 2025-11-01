import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RegistrationDialog } from "@/components/RegistrationDialog";
import { CheckCircle2 } from "lucide-react";

const RegistrationInfo = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const benefits = [
    "Guaranteed 4-game minimum per team",
    "Championship trophy for division winners",
    "Access to college recruiting coordinators",
    "Professional umpires for all games",
    "Team warm-up area and facilities",
    "Digital team photos and highlights",
  ];

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-headline text-5xl font-black uppercase tracking-tighter text-foreground md:text-6xl lg:text-7xl">
              REGISTER YOUR TEAM
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-primary" />
            <p className="font-body text-xl text-muted-foreground md:text-2xl">
              Secure your spot in the DC34 Invitational
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-12 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-card p-6 transition-all hover:bg-accent"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="font-body text-base text-card-foreground">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Registration Details */}
          <div className="mb-10 bg-muted p-8 md:p-12">
            <h3 className="mb-6 font-headline text-2xl font-black uppercase tracking-tight text-foreground md:text-3xl">
              REGISTRATION DETAILS
            </h3>
            
            <div className="space-y-4 font-body text-base text-muted-foreground">
              <p>
                <strong className="text-foreground">Early Bird Discount:</strong> Register 
                by April 30th and save $50 per team.
              </p>
              <p>
                <strong className="text-foreground">Entry Fee:</strong> $595 per team 
                (includes tournament entry, facility fees, and awards).
              </p>
              <p>
                <strong className="text-foreground">Payment:</strong> Full payment due 
                at registration or payment plan available.
              </p>
              <p>
                <strong className="text-foreground">Age Verification:</strong> Birth 
                certificates required for all players at check-in.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto"
              onClick={() => setIsDialogOpen(true)}
            >
              Register Now
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto">
              Download Rules
            </Button>
          </div>

          {/* Registration Dialog */}
          <RegistrationDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
        </div>
      </div>
    </section>
  );
};

export default RegistrationInfo;
