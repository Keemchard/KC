"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Facebook, Twitter, ArrowDown } from "lucide-react";

const roles = ["Software Engineer", "Front-End Developer", "Kaboom!"];

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/keemchard-tamio-498447228/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/Keemchard", label: "GitHub" },
  {
    icon: Facebook,
    href: "https://web.facebook.com/keemchard.tamio.1",
    label: "Facebook",
  },
  { icon: Twitter, href: "https://twitter.com/kmchrd", label: "Twitter" },
];

function useTypewriter(words: string[], speed = 150, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = words[wordIndex];
    setText((prev) =>
      isDeleting
        ? current.substring(0, prev.length - 1)
        : current.substring(0, prev.length + 1),
    );
  }, [words, wordIndex, isDeleting]);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(tick, isDeleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause, tick]);

  return text;
}

export default function Hero() {
  const text = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-24 md:pb-0 relative overflow-hidden"
    >
      {/* Window light ambient effect */}
      <div
        className="hero-window-light absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -z-10 w-[500px] h-[500px]
                   rounded-full blur-[120px] bg-primary/8 top-1/4 right-[-10%]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -z-10 w-72 h-72
                   rounded-full blur-[100px] bg-primary/5 bottom-1/4 left-[-5%]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
                Hello, I'm
              </span>
            </div>

            <h1 className="leading-[0.95]">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-dark dark:text-white tracking-tight">
                Keemchard
              </span>
              <span className="hero-name-glow block text-5xl sm:text-6xl lg:text-8xl font-black text-primary tracking-tight mt-1">
                TAMIO
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-dark/50 dark:text-white/50 h-7 font-medium">
              <span>{text}</span>
              <span className="typewriter-cursor" />
            </p>

            <p className="mt-4 text-sm sm:text-base text-dark/55 dark:text-white/40 max-w-md leading-relaxed mx-auto lg:mx-0">
              Crafting clean, functional interfaces &mdash; turning ideas into
              seamless digital experiences.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary text-sm sm:text-base">
                View My Work
              </a>
              <Link
                href="/about"
                className="px-6 sm:px-7 py-3 rounded-full font-semibold text-sm sm:text-base
                           border-2 border-primary/25
                           text-dark dark:text-white/70
                           hover:border-primary/60 hover:text-primary transition-all duration-300
                           inline-flex items-center gap-2"
              >
                About Me
              </Link>
            </div>

            <ul className="flex gap-3 mt-8 justify-center lg:justify-start">
              {socials.map(({ icon: Icon, href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full
                               border border-dark/10 dark:border-white/10
                               text-dark/50 dark:text-white/40
                               hover:bg-primary hover:text-white hover:border-primary
                               transition-all duration-300"
                  >
                    <Icon size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Portrait ── */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative offset frame */}
              <div
                className="absolute -inset-3 border border-primary/20 rounded-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div
                className="relative w-60 h-72 sm:w-72 sm:h-[340px] md:w-80 md:h-[400px] lg:w-[360px] lg:h-[460px]
                           rounded-xl overflow-hidden
                           shadow-2xl shadow-black/20 dark:shadow-black/50"
              >
                <Image
                  src="/images/personal/new-personal-img.png"
                  alt="Keemchard Tamio"
                  fill
                  className="object-cover object-[center_12%] hero-portrait"
                  priority
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 360px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-dark/25 dark:text-white/20">
          Scroll
        </span>
        <ArrowDown size={14} className="text-dark/25 dark:text-white/20" />
      </div>

      {/* Large background watermark text */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <p className="text-[7vw] font-black tracking-[0.12em] text-dark/[0.03] dark:text-white/[0.03] whitespace-nowrap text-center leading-none pb-4">
          SOFTWARE ENGINEER
        </p>
      </div>
    </section>
  );
}
