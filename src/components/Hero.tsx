"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Keemchard", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/keemchard-tamio-498447228/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:keemchard.tamio@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg"
    >
      {/* Portrait — anchored right */}
      <div className="absolute top-0 right-0 bottom-0 w-[55%] lg:w-[50%] xl:w-[55%] 2xl:w-[50%] hidden md:block">
        <Image
          src="/images/personal/new-personal-img.png"
          alt="Keemchard Tamio"
          fill
          className="object-cover object-[center_30%] saturate-[0.88] contrast-[0.96] brightness-[1.02]"
          priority
          sizes="55vw"
        />
        {/* Film grain overlay */}
        <div
          className="absolute inset-0 photo-grain opacity-[0.035] mix-blend-overlay pointer-events-none"
          aria-hidden="true"
        />
        {/* Left fade into background */}
        <div
          className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-dark-bg to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Mobile: show image behind with overlay */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/personal/new-personal-img.png"
          alt="Keemchard Tamio"
          fill
          className="object-cover object-[65%_top] saturate-[0.88] contrast-[0.96] brightness-[1.02]"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 photo-grain opacity-[0.035] mix-blend-overlay pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-dark-bg/40"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[96rem] mx-auto px-6 md:px-12 lg:px-20 2xl:px-28 w-full">
        <div className="max-w-xl 2xl:max-w-2xl">
          <p className="text-xs sm:text-sm 2xl:text-base font-semibold tracking-[0.3em] uppercase text-white/60 mb-6 2xl:mb-8">
            Frontend Engineer
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-[1.05] tracking-tight">
            Tamio,
            <br />
            Keemchard.
          </h1>

          <p className="mt-6 2xl:mt-8 text-base sm:text-lg 2xl:text-xl text-white/50 max-w-md 2xl:max-w-lg leading-relaxed">
            Crafting seamless web and mobile applications that turn complex
            business requirements into intuitive user experiences.
          </p>

          <div className="flex items-center gap-6 2xl:gap-8 mt-10 2xl:mt-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-white text-dark font-semibold
                         px-7 py-3.5 2xl:px-9 2xl:py-4 rounded-full text-sm sm:text-base 2xl:text-lg
                         hover:bg-white/90 transition-all duration-300"
            >
              View My Work
              <span className="text-lg 2xl:text-xl">&rarr;</span>
            </a>
            <Link
              href="/about"
              className="text-sm sm:text-base 2xl:text-lg font-medium text-white/70
                         border-b border-white/30 pb-0.5
                         hover:text-white hover:border-white/60
                         transition-all duration-300"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Social icons — bottom left */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 2xl:left-[calc((100vw-96rem)/2+1.75rem)] z-10 flex items-center gap-5 2xl:gap-6">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white/40 hover:text-white transition-colors duration-300"
          >
            <Icon className="w-5 h-5 2xl:w-6 2xl:h-6" />
          </a>
        ))}
      </div>

      {/* Decorative circle — bottom right */}
      <div
        className="absolute bottom-[-60px] right-[-30px] w-48 h-48 lg:w-64 lg:h-64 2xl:w-80 2xl:h-80
                   rounded-full border border-white/10 z-10 pointer-events-none hidden md:block"
        aria-hidden="true"
      />
    </section>
  );
}
