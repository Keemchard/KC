"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Resto Flash",
    description:
      "A Pizza Ordering Management System built with Windows Form Application (C#). Created in 2018 as a first-year college project — a desktop application that lets users order pizza online.",
    images: [
      "/images/restoflash/front.png",
      "/images/restoflash/275581214_374080181294596_3478349791622636284_n.png",
      "/images/restoflash/275834023_322325216551630_358296421745431039_n.png",
      "/images/restoflash/275687559_1345149265983059_4103206809188352728_n.png",
      "/images/restoflash/275873999_1104577590089244_3946430400058937338_n.png",
      "/images/restoflash/275909108_2141925505982906_5833808501859061920_n.png",
      "/images/restoflash/276049625_1131926600931575_3030841571413443661_n.png",
      "/images/restoflash/276152527_987406105211801_4291575818986994336_n.png",
      "/images/restoflash/277124969_881736212665303_6513117117823840663_n.png",
    ],
    tags: ["C#", "Windows Forms", "Desktop App"],
    github: "https://github.com/Keemchard/Resto-Flash",
  },
  {
    title: "FloodWatch",
    description:
      "A web-based application linked to hardware through IoT. Users can log in, create posts (CRUD), vote in automated polls, and view monthly flood analysis diagrams for the implementation site.",
    images: [
      "/images/floodwatch/signup.png",
      "/images/floodwatch/login.png",
      "/images/floodwatch/post.png",
      "/images/floodwatch/poll.png",
      "/images/floodwatch/flupdates.png",
      "/images/floodwatch/diagram.png",
    ],
    tags: ["IoT", "Web App", "CRUD"],
    github: "https://github.com/FLOODWATCH",
  },
  {
    title: "BossKC | Acad Servant",
    description:
      "An Academic Business Service Website containing all relevant information about my acad servant services.",
    images: [
      "/images/bosskc/acad1.png",
      "/images/bosskc/acad2.png",
      "/images/bosskc/acad3.png",
      "/images/bosskc/acad4.png",
      "/images/bosskc/acad5.png",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://keemchard-acad-servant.netlify.app/",
    github: "https://github.com/Keemchard/AcadServantWebsite",
  },
  {
    title: "ZhitShoe",
    description:
      "An e-commerce website created as part of Front-End training at Mindtech × TESDA. Features a modern, responsive design.",
    images: [
      "/images/zhitshoe/zhit-shoe-3-removebg-preview.png",
      "/images/zhitshoe/zhitshoeForportfolio.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
    live: "https://zhitshoe.netlify.app/",
    github: "https://github.com/Keemchard/CWD-project-98-",
  },
  {
    title: "New Words To My Ear",
    description:
      "An online program where users can enter newly heard words along with their meaning and pronunciation for others to learn. Supports full CRUD operations on the word entries.",
    images: ["/images/newwords/newWordsAppForportfolio.png"],
    tags: ["Web App", "CRUD", "Educational"],
    github: "https://github.com/Keemchard/New-Words-To-My-Ear-App",
  },
];

function ImageSlideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const advance = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(advance, 2500);
    return () => clearInterval(id);
  }, [images.length, advance]);

  return (
    <div className="relative w-full h-full bg-dark/5 dark:bg-white/5">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-contain p-3 transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-primary" : "w-2 bg-white/40"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen pt-16 md:pt-20 pb-24 md:pb-0">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-dark/50 dark:text-white/40
                       hover:text-primary transition-colors group mb-6"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div>
            <span className="section-label">Portfolio</span>
            <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-6">
              My Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="group relative bg-white dark:bg-white/[0.04] border border-gray-100
                           dark:border-white/[0.06] rounded-3xl overflow-hidden
                           hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5
                           transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-video bg-dark/5 dark:bg-white/5">
                  <ImageSlideshow images={project.images} />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-lg font-bold text-dark dark:text-white">
                      {project.title}
                    </h2>
                    <div className="flex gap-2 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-dark/50 dark:text-white/40
                                     hover:text-primary hover:bg-primary/10 transition-all"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-dark/50 dark:text-white/40
                                     hover:text-primary hover:bg-primary/10 transition-all"
                          aria-label="Live site"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-dark/65 dark:text-white/55 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-dark/5 dark:bg-white/5
                                   text-dark/60 dark:text-white/50 font-medium
                                   border border-dark/10 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
