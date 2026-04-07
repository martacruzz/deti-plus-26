import { PixelCross } from "./pixel-elements";

interface Association {
  name: string;
  fullName: string;
  description: string;
}

const associations: Association[] = [
  {
    name: "NEEETA",
    fullName: "Electronic, Telecommunications and Aerospace Engineering Student Association",
    description:
      "Founded in 2011 and recently expanded to include Aerospace Engineering, NEEETA defends student interests while promoting extracurricular training, industry networking, and social activities to enrich the academic experience.",
  },
  {
    name: "NEI",
    fullName: "Informatics Student Association",
    description:
      "Created in 2013, NEI supports Informatics, Data Science, and Digital Games students. Known for organizing programming competitions and tech events, NEI focuses on community building, extracurricular learning, and bringing students closer to the job market.",
  },
  {
    name: "NEECT",
    fullName: "Computer and Telematics Engineering Student Association",
    description:
      "Founded in 2006, NEECT represents its students by promoting pedagogical activities like workshops and tech events. It fosters community interaction, organizes large-scale events, and actively connects students with academia and the industry.",
  },
];

export function Associations() {
  return (
    <section id="associations" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-2 w-2 bg-accent" />
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
              Organized by
            </p>
          </div>
          <h2 className="text-balance font-display text-3xl lowercase tracking-[0.15em] text-primary sm:text-4xl">
            three associations, one mission
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {associations.map((a) => (
            <div
              key={a.name}
              className="group border border-border bg-card p-8 transition-colors hover:border-accent/50"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-secondary">
                <PixelCross className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-1 font-display text-2xl lowercase tracking-tight text-primary">
                {a.name}
              </h3>
              <p className="mb-4 text-xs uppercase tracking-widest text-accent">
                {a.fullName}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}