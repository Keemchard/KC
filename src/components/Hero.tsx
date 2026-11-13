"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type SocialObj = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
  label: string;
};

const socials: SocialObj[] = [
  { icon: Github, href: "https://github.com/Keemchard", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/keemchard-tamio-498447228/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:keemchard.tamio@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-dark-bg"
    >
      {/* Grain — gives the flat black surface depth */}
      <div
        className="absolute inset-0 photo-grain opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      />

      {/* Vertical role label — left margin, editorial sidebar */}
      <div
        className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3"
        aria-hidden="true"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span className="w-px h-12 bg-white/10 inline-block" />
        <span className="text-[0.6rem] font-medium tracking-[0.2em] text-white/20 uppercase">
          Frontend · Engineer
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-28 w-full py-16">

          {/* Display name — the visual */}
          <h1
            className="font-semibold leading-[0.92] tracking-tight select-none"
            style={{ fontSize: "clamp(4rem, 13vw, 13rem)" }}
          >
            {/* Line 1: solid white, gold comma */}
            <span className="block text-white">
              Tamio<span className="text-primary">,</span>
            </span>

            {/* Line 2: outlined/ghost — creates depth and texture */}
            <span
              className="block"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                color: "transparent",
              }}
            >
              Keemchard.
            </span>
          </h1>

          {/* Divider — neutral hairline with gold anchor */}
          <div className="relative mt-10 2xl:mt-14 mb-10 2xl:mb-14 h-px bg-white/[0.08] w-full">
            <div
              className="absolute left-0 top-0 h-full w-24 2xl:w-32 bg-primary"
              aria-hidden="true"
            />
          </div>

          {/* Below divider: description + CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-12 items-center">
            <p className="text-base sm:text-lg 2xl:text-xl text-white/45 max-w-sm 2xl:max-w-md leading-relaxed">
              Building web and mobile applications that turn complex
              business requirements into clear, usable experiences.
            </p>

            <div className="flex items-center gap-6 md:justify-end">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-dark font-medium
                           px-7 py-3.5 2xl:px-9 2xl:py-4 rounded-full text-sm 2xl:text-base
                           hover:bg-white/90 transition-colors duration-150"
              >
                View my work
                <span aria-hidden="true">&rarr;</span>
              </a>

              <Link
                href="/about"
                className="text-sm 2xl:text-base font-medium text-white/50
                           border-b border-white/20 pb-0.5
                           hover:text-white hover:border-white/40
                           transition-colors duration-150"
              >
                About me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row — social icons */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-28 w-full pb-8">
        <div className="flex items-center gap-5 2xl:gap-6">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/30 hover:text-white/60 transition-colors duration-150"
            >
              <Icon className="w-[1.125rem] h-[1.125rem]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
