import teamImage from "@/assets/team-celebration.jpg";
import pitcherImage from "@/assets/pitcher-action.jpg";
import catcherImage from "@/assets/catcher-portrait.jpg";

const TournamentHighlights = () => {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-5xl font-black uppercase tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            TOURNAMENT HIGHLIGHTS
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
        </div>

        {/* First Row - Large Image Left, Content Right */}
        <div className="mb-8 grid gap-0 md:mb-12 md:grid-cols-2">
          <div className="relative h-[400px] md:h-[500px]">
            <img 
              src={teamImage} 
              alt="Championship team celebration" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-card p-8 md:p-12">
            <h3 className="mb-4 font-headline text-3xl font-black uppercase tracking-tight text-card-foreground md:text-4xl">
              CHAMPIONSHIP EXPERIENCE
            </h3>
            <div className="mb-6 h-1 w-16 bg-primary" />
            <p className="mb-4 font-body text-base leading-relaxed text-muted-foreground">
              Compete for championship titles in your division with a structured bracket 
              play format that ensures maximum game opportunities.
            </p>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              Winners receive custom championship trophies and recognition at our awards 
              ceremony.
            </p>
          </div>
        </div>

        {/* Second Row - Three Column Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Content Card */}
          <div className="flex flex-col justify-center bg-secondary p-8">
            <h3 className="mb-4 font-headline text-2xl font-black uppercase tracking-tight text-secondary-foreground">
              ELITE COMPETITION
            </h3>
            <div className="mb-4 h-1 w-12 bg-primary" />
            <p className="font-body text-sm leading-relaxed text-secondary-foreground/80">
              Face off against top-ranked teams from across the region in highly 
              competitive bracket play.
            </p>
          </div>

          {/* Image Card */}
          <div className="relative h-[300px]">
            <img 
              src={pitcherImage} 
              alt="Pitcher in action" 
              className="h-full w-full object-cover"
            />
          </div>

          {/* Image Card */}
          <div className="relative h-[300px]">
            <img 
              src={catcherImage} 
              alt="Catcher behind plate" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Third Row - Content Left, Large Content Right */}
        <div className="mt-8 grid gap-0 md:mt-12 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-accent p-8 md:p-12">
            <h3 className="mb-4 font-headline text-3xl font-black uppercase tracking-tight text-accent-foreground md:text-4xl">
              COLLEGE EXPOSURE
            </h3>
            <div className="mb-6 h-1 w-16 bg-primary" />
            <ul className="space-y-3 font-body text-base text-accent-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 bg-primary" />
                <span>College coaches and scouts in attendance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 bg-primary" />
                <span>Recruiting profile distribution to programs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 bg-primary" />
                <span>Showcase your skills at the highest level</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center bg-muted p-8 md:p-12">
            <h3 className="mb-4 font-headline text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">
              PREMIER FACILITIES
            </h3>
            <div className="mb-6 h-1 w-16 bg-primary" />
            <p className="mb-4 font-body text-base leading-relaxed text-muted-foreground">
              Play on championship-caliber fields with professional-grade lighting, 
              scoreboards, and amenities.
            </p>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              Spectator seating, concessions, and covered dugouts provide a complete 
              tournament experience for players and families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentHighlights;
