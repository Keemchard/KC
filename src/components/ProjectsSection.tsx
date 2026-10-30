"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "hired.log",
    description:
      "A full-stack job application tracker with AI-powered auto-fill, cover letter generator, resume match scorer, and interview prep mode.",
    image: "/images/hired-log/dashboard.png",
    tags: ["Next.js", "TypeScript", "Firebase", "Claude AI"],
    type: "Web App",
    live: "https://hired-log.vercel.app",
  },
  {
    title: "Resto Flash",
    description:
      "A restaurant ordering application that allows users to browse menus, place orders, and enjoy a smooth ordering experience.",
    image: "/images/restoflash/front.png",
    tags: ["C#", "Windows Forms"],
    type: "Desktop App",
    github: "https://github.com/Keemchard/Resto-Flash",
  },
  {
    title: "FloodWatch",
    description:
      "A web-based IoT application for flood monitoring with user posts, automated polls, and monthly analysis diagrams.",
    image: "/images/floodwatch/post.png",
    tags: ["IoT", "Web App", "CRUD"],
    type: "Web App",
    github: "https://github.com/FLOODWATCH",
  },
  {
    title: "ZhitShoe",
    description:
      "An e-commerce website with modern responsive design, created during front-end training at Mindtech.",
    image: "/images/zhitshoe/zhitshoeForportfolio.png",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Web App",
    live: "https://zhitshoe.netlify.app/",
  },
  {
    title: "BossKC",
    description:
      "An academic business service website with all relevant information about acad servant services.",
    image: "/images/bosskc/bosskcForPortfolio.png",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Web App",
    live: "https://keemchard-acad-servant.netlify.app/",
  },
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector<HTMLElement>("[data-card]");
    const w = (card?.offsetWidth ?? 350) + 16;
    scrollRef.current.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label">What I&apos;ve built</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white tracking-tight leading-none">
              PROJECTS
            </h2>
          </div>
          <div className="flex items-end gap-6">
            <p className="text-sm text-dark/50 dark:text-white/40 max-w-xs leading-relaxed hidden md:block">
              A collection of real-world projects where I applied modern web technologies to solve problems and create meaningful user experiences.
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
          {projects.map((project) => {
            const href = project.live || project.github || "/projects";
            return (
              <div
                key={project.title}
                data-card
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[380px] flex-shrink-0 snap-start
                           bg-white dark:bg-white/[0.04] border border-dark/[0.06] dark:border-white/[0.08]
                           rounded-2xl overflow-hidden flex flex-col
                           hover:border-primary/25 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] bg-dark/[0.03] dark:bg-white/[0.03] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold
                                   bg-dark-bg/70 dark:bg-dark-bg/80 text-white backdrop-blur-sm border border-white/10">
                    {project.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-dark dark:text-white text-base mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark/50 dark:text-white/40 leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-medium
                                   border border-dark/[0.08] dark:border-white/[0.08]
                                   text-dark/50 dark:text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary
                               hover:gap-2.5 transition-all duration-300"
                  >
                    View Project
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <Link href="/projects" className="btn-primary">
            See All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
