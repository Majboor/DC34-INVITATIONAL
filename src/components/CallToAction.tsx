import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RegistrationDialog } from "@/components/RegistrationDialog";

const CallToAction = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section className="bg-primary py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 font-headline text-5xl font-black uppercase tracking-tighter text-primary-foreground md:text-6xl lg:text-7xl">
          READY TO COMPETE?
        </h2>
        <p className="mb-10 font-body text-xl text-primary-foreground/80 md:text-2xl">
          Register for the DC34 Invitational today
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            variant="heroOutline" 
            size="xl"
            className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto"
            onClick={() => setIsDialogOpen(true)}
          >
            Register Your Team
          </Button>
          <Button 
            variant="secondary" 
            size="xl"
            className="w-full sm:w-auto"
            onClick={() => setIsDialogOpen(true)}
          >
            Contact Us
          </Button>
        </div>

        {/* Registration Dialog */}
        <RegistrationDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </div>
    </section>
  );
};

export default CallToAction;
