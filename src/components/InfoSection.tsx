import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy } from "lucide-react";

const InfoSection = () => {
  const features = [
    {
      icon: Trophy,
      title: "ELITE COMPETITION",
      description: "Compete against top teams from across the region in premier fastpitch tournaments",
    },
    {
      icon: Users,
      title: "COLLEGE EXPOSURE",
      description: "Showcase your skills in front of college coaches and scouts actively recruiting",
    },
    {
      icon: Calendar,
      title: "YEAR-ROUND EVENTS",
      description: "Multiple tournament opportunities throughout the season at premier facilities",
    },
  ];

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-5xl font-black uppercase tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            WHY COMPETE WITH US
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-card p-8 transition-all hover:bg-accent animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center bg-primary">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="mb-4 font-headline text-2xl font-bold uppercase tracking-tight text-card-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              {/* Accent Bar */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button variant="hero" size="lg">
            View Tournament Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
