"use client";

import { useState } from "react";
import { PixelCross } from "./pixel-elements";

const links = [
  { label: "About", href: "#about" },
  { label: "Associations", href: "#associations" },
  { label: "Timeline", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-2xl lowercase tracking-wide text-primary">
              deti
            </span>
            <span className="font-display text-2xl text-accent">+</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-sans text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-primary md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <PixelCross className="h-5 w-5 rotate-45" />
            ) : (
              <div className="flex flex-col gap-1.5">
                <div className="h-0.5 w-6 bg-primary" />
                <div className="h-0.5 w-6 bg-primary" />
                <div className="h-0.5 w-6 bg-primary" />
              </div>
            )}
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out md:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden bg-background">
            <ul className="flex flex-col gap-4 border-t border-border px-6 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-sans text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}