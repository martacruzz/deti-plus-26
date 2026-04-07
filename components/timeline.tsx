const days = [
  {
    date: "May 19",
    day: "Day 1",
    events: [
      { time: "17:00 - 20:00", title: "Lectures & Workshops" },
    ],
  },
  {
    date: "May 20",
    day: "Day 2",
    events: [
      { time: "All Day", title: "Company Fair" },
      { time: "Morning & Afternoon", title: "Interviews & Speed Interviews" },
      { time: "End of Day", title: "Informal Business Networking Snack" },
    ],
  },
  {
    date: "May 21",
    day: "Day 3",
    events: [
      { time: "17:00 - 20:00", title: "Lectures & Workshops" },
      { time: "After 20:00", title: "Closing Session & Networking" },
    ],
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-2 w-2 bg-accent" />
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
              Schedule
            </p>
          </div>
          <h2 className="mb-4 text-balance font-display text-3xl lowercase tracking-[0.15em] text-primary sm:text-4xl">
            event timeline
          </h2>
          <p className="text-muted-foreground">
            The full detailed schedule is coming soon. Stay tuned!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {days.map((d) => (
            <div
              key={d.day}
              className="border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-6">
                <span className="font-display text-xs uppercase tracking-widest text-accent">
                  {d.day}
                </span>
                <h3 className="mt-1 font-display text-2xl lowercase tracking-[0.12em] text-primary">
                  {d.date}
                </h3>
              </div>

              <ul className="flex flex-col gap-4">
                {d.events.map((e) => (
                  <li
                    key={e.title}
                    className="flex items-start gap-3 border-l-2 border-accent/30 pl-4"
                  >
                    <div>
                      <span className="font-display text-lg text-muted-foreground">
                        {e.time}
                      </span>
                      <p className="text-sm text-secondary-foreground">
                        {e.title}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}