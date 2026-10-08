"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  { src: "/images/restoflash/front.png", alt: "Resto Flash" },
  { src: "/images/floodwatch/post.png", alt: "FloodWatch" },
  { src: "/images/zhitshoe/zhitshoeForportfolio.png", alt: "ZhitShoe" },
  { src: "/images/bosskc/bosskcForPortfolio.png", alt: "BossKC" },
  { src: "/images/newwords/newWordsAppForportfolio.png", alt: "New Words App" },
];

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8">
          <span className="section-label">What I&apos;ve built</span>
          <h2 className="section-heading section-heading-accent">PROJECTS</h2>
        </div>

        <div
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.src}
                className="min-w-full h-full flex items-center justify-center bg-dark/5 dark:bg-white/5 p-4"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={900}
                  height={600}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full
                       bg-black/30 text-white hover:bg-primary transition-all
                       opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full
                       bg-black/30 text-white hover:bg-primary transition-all
                       opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-7">
          <Link href="/projects" className="btn-primary">
            See All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
