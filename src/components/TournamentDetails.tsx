import { Button } from "@/components/ui/button";
import fieldImage from "@/assets/field-aerial.jpg";
import { MapPin, Calendar, Users, DollarSign } from "lucide-react";

const TournamentDetails = () => {
  const details = [
    {
      icon: Calendar,
      label: "DATES",
      value: "June 15-17, 2024",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Elite Sports Complex",
    },
    {
      icon: Users,
      label: "DIVISIONS",
      value: "10U - 18U",
    },
    {
      icon: DollarSign,
      label: "ENTRY FEE",
      value: "$595 per team",
    },
  ];

  return (
    <section className="bg-muted py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-0 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[400px] md:h-auto">
            <img 
              src={fieldImage} 
              alt="Tournament facility aerial view" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content Side */}
          <div className="bg-primary p-8 md:p-12 lg:p-16">
            <h2 className="mb-6 font-headline text-4xl font-black uppercase tracking-tighter text-primary-foreground md:text-5xl lg:text-6xl">
              TOURNAMENT
              <br />
              DETAILS
            </h2>
            
            <div className="mb-8 h-1 w-20 bg-secondary" />

            {/* Details Grid */}
            <div className="mb-10 space-y-6">
              {details.map((detail, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary">
                    <detail.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 font-body text-xs font-bold uppercase tracking-widest text-primary-foreground/70">
                      {detail.label}
                    </p>
                    <p className="font-headline text-xl font-bold uppercase text-primary-foreground">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-8 font-body text-base leading-relaxed text-primary-foreground/90">
              The DC34 Invitational brings together elite fastpitch teams for three days of 
              championship-level competition. Multiple age divisions, top-tier facilities, 
              and exposure to college scouts make this a premier tournament experience.
            </p>

            <Button 
              variant="heroOutline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Full Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentDetails;
