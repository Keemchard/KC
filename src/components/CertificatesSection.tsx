"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";

const certificates = [
  {
    image: "/images/cert/SQME cert image.png",
    title: "Web Developer Intern",
    issuer: "SQME",
  },
  {
    image: "/images/cert/creativeweb-design - cert.jpg",
    title: "Creative Web Design",
    issuer: "Mindtech",
  },
  {
    image: "/images/cert/web-dev - cert.jpg",
    title: "Web Development",
    issuer: "TESDA x MINDTECH",
  },
];

export default function CertificatesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector<HTMLElement>("[data-card]");
    const w = (card?.offsetWidth ?? 260) + 16;
    scrollRef.current.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section id="certificates" className="py-16 md:py-24 bg-dark/[0.02] dark:bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label">Credentials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white tracking-tight leading-none">
              CERTIFICATES
            </h2>
          </div>
          <div className="flex items-end gap-6">
            <p className="text-sm text-dark/50 dark:text-white/40 max-w-xs leading-relaxed hidden md:block">
              Completed training programs and certifications that help me grow and deliver better solutions.
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-dark/10 dark:border-white/10
                           flex items-center justify-center text-dark/40 dark:text-white/40
                           hover:border-primary hover:text-primary transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-dark/10 dark:border-white/10
                           flex items-center justify-center text-dark/40 dark:text-white/40
                           hover:border-primary hover:text-primary transition-all"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.title}
              data-card
              className="min-w-[220px] sm:min-w-[250px] md:min-w-[260px] flex-shrink-0 snap-start
                         bg-white dark:bg-white/[0.04] border border-dark/[0.06] dark:border-white/[0.08]
                         rounded-2xl overflow-hidden
                         hover:border-primary/25 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-dark/[0.03] dark:bg-white/[0.03] overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-dark dark:text-white text-sm leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-dark/40 dark:text-white/35 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
                <ExternalLink size={14} className="shrink-0 text-dark/20 dark:text-white/20 mt-0.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/certificates" className="btn-primary">
            See All Certificates
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
