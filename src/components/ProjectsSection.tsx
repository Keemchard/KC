"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

// ─── Personal Projects ────────────────────────────────────────────────────────
const personalSlides = [
  { src: "/images/restoflash/front.png",                alt: "Resto Flash" },
  { src: "/images/floodwatch/post.png",                 alt: "FloodWatch" },
  { src: "/images/zhitshoe/zhitshoeForportfolio.png",   alt: "ZhitShoe" },
  { src: "/images/bosskc/bosskcForPortfolio.png",       alt: "BossKC" },
  { src: "/images/newwords/newWordsAppForportfolio.png", alt: "New Words App" },
];

// ─── Globe Telecom Work Projects ─────────────────────────────────────────────
const globeProjects = [
  {
    id: "fosp",
    title: "GT FOSP Performance Dashboard",
    image: "/images/globe-project-assets/fosp/preview.png",
    tagline: "Real-time field operations monitoring across 8 Philippine territories",
    description:
      "A unified operations dashboard consolidating KPIs across three business domains — Selling & Installation, Network Maintenance, and Last Mile Repair — with live trends, territory breakdowns, and month-over-month deltas.",
    features: [
      "Scorecard Overview",
      "KPI Cards with Live Trends",
      "Territory Breakdown (T1–T8)",
      "3 Operational Domains",
      "Collapsible Navigation",
    ],
    stack: ["Next.js 15", "React 18", "TypeScript", "Recharts", "TanStack Query", "SCSS Modules"],
  },
  {
    id: "dataloom",
    title: "DataLoom — Data Product Blueprint Platform",
    image: "/images/globe-project-assets/dataloom/preview.png",
    tagline: "End-to-end lifecycle platform for data product governance",
    description:
      "Streamlines creation, management, and governance of data products — from demand intake to published blueprint — with AI-assisted tools to reduce duplication across Globe's telecom organization.",
    features: [
      "Existence Checker + AI Matching",
      "DPB Generator",
      "DPB & Pipeline Registry",
      "MAVI AI Assistant",
      "Access Management",
      "Notifications",
    ],
    stack: ["React", "TypeScript", "Next.js", "AI/ML Integration"],
  },
  {
    id: "intellihub",
    title: "IntelliHub — Network Analytics Platform",
    image: "/images/globe-project-assets/intellihub/intel.png",
    tagline: "Centralized analytics discovery hub for Globe's Network Technology Group",
    description:
      "An internal analytics platform for Globe's NTG that centralizes discovery, access, and enablement across trusted NAI data products — with a marketplace, role-aware dashboards, and a conversational AI assistant.",
    features: [
      "Analytics Marketplace",
      "Access & Enablement Hub",
      "Navi AI Assistant",
      "Onboarding Checklist",
      "Role-aware Home Dashboard",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Query", "Zod", "BigQuery"],
  },
  {
    id: "eagle-eye",
    title: "Eagle Eye",
    image: "/images/globe-project-assets/eagle-eye/preview.png",
    tagline: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    features: [
      "Lorem Ipsum Feature",
      "Dolor Sit Amet",
      "Consectetur Adipiscing",
      "Eiusmod Tempor",
    ],
    stack: ["React", "TypeScript", "Node.js"],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const { theme, setTheme } = useTheme();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const isGlobe = theme === "globe-telecom";

  const next = useCallback(() => setCurrent((c) => (c + 1) % personalSlides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + personalSlides.length) % personalSlides.length), []);

  useEffect(() => {
    if (paused || isGlobe) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, isGlobe, next]);

  // Reset slideshow index when switching away from globe
  useEffect(() => {
    if (!isGlobe) setCurrent(0);
  }, [isGlobe]);

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Section header */}
        <div className="text-center mb-10">
          <span className="section-label">
            {isGlobe ? "Acquiro · Globe Telecom" : "What I've built"}
          </span>
          <h2 className="section-heading section-heading-accent">PROJECTS</h2>
          {isGlobe && (
            <button
              onClick={() => setTheme("dark")}
              className="mt-4 text-xs text-dark/40 dark:text-white/30 hover:text-primary
                         transition-colors duration-200 underline underline-offset-4"
            >
              ← Back to Personal Projects
            </button>
          )}
        </div>

        {/* ── Globe Telecom Work Projects ── */}
        {isGlobe && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {globeProjects.map((project) => (
              <div key={project.id} className="card overflow-hidden group flex flex-col">

                {/* Screenshot */}
                <div className="relative aspect-video bg-dark/5 dark:bg-white/5 overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full
                                   bg-primary text-white text-[11px] font-bold
                                   shadow-lg shadow-primary/40 tracking-wide">
                    Globe Telecom
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-dark dark:text-white mb-1 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-primary/80 italic mb-3 font-medium">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-dark/65 dark:text-white/55 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-gray-100 dark:border-white/5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-mono
                                   bg-dark/5 dark:bg-white/5
                                   text-dark/45 dark:text-white/35"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Personal Projects Slideshow ── */}
        {!isGlobe && (
          <>
            <div
              className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl group"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {personalSlides.map((slide) => (
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
                {personalSlides.map((_, i) => (
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
          </>
        )}
      </div>
    </section>
  );
}
