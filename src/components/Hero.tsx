"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Facebook, Twitter } from "lucide-react";

const roles = ["Software Engineer", "Front-End Developer", "Kaboom!"];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/keemchard-tamio-498447228/", label: "LinkedIn" },
  { icon: Github,   href: "https://github.com/Keemchard",                           label: "GitHub" },
  { icon: Facebook, href: "https://web.facebook.com/keemchard.tamio.1",             label: "Facebook" },
  { icon: Twitter,  href: "https://twitter.com/kmchrd",                             label: "Twitter" },
];

function useTypewriter(words: string[], speed = 150, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = words[wordIndex];
    setText((prev) =>
      isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
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
      className="min-h-screen flex items-center pt-16 pb-20 md:pb-0 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -z-10 w-72 h-72 md:w-96 md:h-96
                   rounded-full blur-3xl bg-primary/10 top-1/4 right-0"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-6">

          {/* ── Text ── */}
          <div className="flex-1 text-center md:text-left">
            <span className="section-label">Hello, World! 👋</span>

            <h1 className="mt-2 leading-tight">
              <span className="hero-greeting block text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-white">
                Hi, I&apos;m
              </span>
              <span className="hero-name hero-name-glow block text-5xl sm:text-6xl md:text-8xl font-black text-primary">
                KEEMCHARD
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-dark/60 dark:text-white/60 h-7">
              <span>{text}</span>
              <span className="typewriter-cursor" />
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6 justify-center md:justify-start">
              <a href="#projects" className="btn-primary text-sm sm:text-base">
                View My Work
              </a>
              <Link
                href="/about"
                className="hero-outline-btn px-6 sm:px-7 py-3 rounded-full font-semibold text-sm sm:text-base
                           border-2 border-primary/30 dark:border-primary/40
                           text-dark dark:text-white/80
                           hover:border-primary transition-all duration-300
                           inline-flex items-center gap-2"
              >
                About Me
              </Link>
            </div>

            <ul className="flex gap-3 mt-5 justify-center md:justify-start">
              {socials.map(({ icon: Icon, href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-icon inline-flex items-center justify-center w-10 h-10 rounded-full
                               bg-dark/5 dark:bg-white/5 text-dark dark:text-white
                               hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Icon size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Profile image ── */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80">
              {/* Flip card */}
              <div className="flip-card w-full h-full cursor-pointer select-none rounded-full overflow-hidden">
                <div className="flip-card-inner relative w-full h-full">
                  <div className="flip-card-front absolute inset-0">
                    <Image
                      src="/images/personal/formal-personal-picture.jpg"
                      alt="Keemchard Tamio"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-[center_20%]"
                      priority
                    />
                  </div>
                  <div className="flip-card-back absolute inset-0">
                    <Image
                      src="/images/personal/back profile.png"
                      alt="Keemchard Tamio back"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Ring */}
              <div
                className="absolute inset-0 rounded-full ring-4 ring-primary/40
                           ring-offset-4 ring-offset-light-bg dark:ring-offset-dark-bg
                           pointer-events-none"
                aria-hidden="true"
              />

              {/* Open to work badge */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2
                           bg-white dark:bg-dark-bg/90 backdrop-blur-sm rounded-2xl
                           px-3 py-1.5 shadow-lg border border-gray-100 dark:border-white/10
                           flex items-center gap-2 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold text-dark dark:text-white">Open to work</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
