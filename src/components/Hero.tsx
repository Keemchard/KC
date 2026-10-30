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
      <div className="absolute top-0 right-0 bottom-0 w-[55%] lg:w-[50%] xl:w-[55%] hidden md:block">
        <Image
          src="/images/personal/new-personal-img.png"
          alt="Keemchard Tamio"
          fill
          className="object-cover object-[center_30%] saturate-[0.88] contrast-[0.96] brightness-[1.02]"
          priority
          sizes="55vw"
        />
        {/* Film grain overlay */}
        <div className="absolute inset-0 photo-grain opacity-[0.035] mix-blend-overlay pointer-events-none" aria-hidden="true" />
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
        <div className="absolute inset-0 photo-grain opacity-[0.035] mix-blend-overlay pointer-events-none" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-dark-bg/40"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/60 mb-6">
            Frontend Engineer
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            Tamio,
            <br />
            Keemchard.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/50 max-w-md leading-relaxed">
            I build web applications with modern technologies and a focus on
            creating meaningful, user-friendly experiences.
          </p>

          <div className="flex items-center gap-6 mt-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-white text-dark font-semibold
                         px-7 py-3.5 rounded-full text-sm sm:text-base
                         hover:bg-white/90 transition-all duration-300"
            >
              View My Work
              <span className="text-lg">&rarr;</span>
            </a>
            <Link
              href="/about"
              className="text-sm sm:text-base font-medium text-white/70
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
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 z-10 flex items-center gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white/40 hover:text-white transition-colors duration-300"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Decorative circle — bottom right */}
      <div
        className="absolute bottom-[-60px] right-[-30px] w-48 h-48 lg:w-64 lg:h-64
                   rounded-full border border-white/10 z-10 pointer-events-none hidden md:block"
        aria-hidden="true"
      />
    </section>
  );
}
