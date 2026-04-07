"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-05-19T09:00:00");

function calculateTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      {/* Box: h-16 w-16 (64px) on mobile, h-28 w-28 on desktop */}
      <div className="flex h-16 w-16 items-center justify-center border border-border bg-card sm:h-28 sm:w-28">
        {/* Font: text-2xl on mobile, text-5xl on desktop */}
        <span className="font-display text-2xl text-primary sm:text-5xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      {/* Label: smaller font on mobile */}
      <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    setTime(calculateTimeLeft());

    const id = setInterval(() => setTime(calculateTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  
  if (!isMounted) {
    return null;
  }

  return (
    <section id="about" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="h-2 w-2 bg-accent" />
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
            Countdown
          </p>
        </div>
        <h2 className="mb-12 text-balance font-display text-3xl lowercase tracking-[0.15em] text-primary sm:text-4xl">
          the event starts in
        </h2>

        <div className="flex items-center justify-center gap-2 sm:gap-6">
          <TimeUnit value={time.days} label="Days" />
          
          <span className="mt-[-1.2rem] font-display text-xl text-accent sm:mt-[-1.5rem] sm:text-2xl">
            :
          </span>
          
          <TimeUnit value={time.hours} label="Hours" />
          
          <span className="mt-[-1.2rem] font-display text-xl text-accent sm:mt-[-1.5rem] sm:text-2xl">
            :
          </span>
          
          <TimeUnit value={time.minutes} label="Min" />
          
          <span className="mt-[-1.2rem] font-display text-xl text-accent sm:mt-[-1.5rem] sm:text-2xl">
            :
          </span>
          
          <TimeUnit value={time.seconds} label="Sec" />
        </div>
      </div>
    </section>
  );
}
