"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  features?: string[];
  stack?: string[];
}

const projects: Project[] = [
  {
    title: "hired.log",
    description:
      "A full-stack job application tracker built to document and streamline the job hunt. Features AI-powered auto-fill that extracts company, role, location, and salary from raw job description text — no manual entry needed. Also includes an AI Cover Letter generator tailored per application, a Resume Match scorer that compares your resume against a JD, and an AI Interview Prep mode with categorized practice questions and live feedback. Backed by a Kanban board, analytics dashboard, and Google Auth.",
    images: [
      "/images/hired-log/dashboard.png",
      "/images/hired-log/new-application.png",
      "/images/hired-log/kanban.png",
      "/images/hired-log/analytics.png",
      "/images/hired-log/cover-letters.png",
      "/images/hired-log/resume-match.png",
      "/images/hired-log/interview-prep.png",
      "/images/hired-log/login.png",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Gemini AI",
      "Sass",
      "Vercel",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Firebase (Auth & Firestore)",
      "Gemini AI API",
      "Sass/SCSS",
      "react-hot-toast",
      "react-icons",
      "uuid",
      "Vercel (Hosting)",
    ],
    features: [
      "AI auto-fill from job descriptions (text + image)",
      "AI cover letter generator tailored per application",
      "Resume match scorer with ATS analysis",
      "AI interview prep with rated feedback (8 questions/session)",
      "Kanban board with drag-and-drop pipeline",
      "Analytics dashboard with response rates and trends",
      "Chrome extension for saving jobs from LinkedIn, Indeed, Kalibrr",
      "Custom statuses — add, rename, reorder, delete",
      "Interview scheduling with date, type, and notes",
      "Follow-up reminders with overdue alerts",
      "CSV export, bulk actions, and activity timeline",
      "Google authentication",
      "Dark and light themes",
      "Duplicate application detection",
      "Full-text search and filtering",
    ],
    live: "https://hired-log.vercel.app",
    github: "https://github.com/Keemchard/hired-log",
    featured: true,
  },
  {
    title: "hired.log Landing Page",
    description:
      "A marketing landing page for the hired.log job application tracker. Showcases all features with a clean, professional design — core features grid, new features section, AI tools breakdown, and a step-by-step how-it-works flow.",
    images: [
      "/images/hired-log-landing/hero.png",
      "/images/hired-log-landing/features.png",
      "/images/hired-log-landing/ai-tools.png",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "React Icons",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "CSS Modules",
      "react-icons",
    ],
    features: [
      "Hero section with live app card preview",
      "Core features grid (6 features)",
      "New features showcase with interactive demos",
      "AI tools section with detailed breakdowns",
      "Step-by-step how-it-works flow",
      "Responsive design for all screen sizes",
      "Navigation with section anchoring",
    ],
    live: "https://hired-log-landing.vercel.app/",
    github: "https://github.com/Keemchard/hired-log-landing",
  },
  {
    title: "NARA",
    description:
      "A minimal productivity app for managing tasks and notes. Features a dashboard with stats overview, a task manager with list and Kanban board views, and a note editor with color-coding and pinning. All data is stored locally in the browser — no account needed.",
    images: [
      "/images/nara/dashboard.png",
      "/images/nara/tasks.png",
      "/images/nara/notes.png",
    ],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "LocalStorage",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "React Router v6",
      "React Icons",
      "LocalStorage (persistence)",
    ],
    features: [
      "Dashboard with greeting, stats, upcoming tasks, and recent notes",
      "Task management with full CRUD operations",
      "Kanban board view with drag-and-drop between To Do / In Progress / Done",
      "List view with filter tabs (all/pending/done)",
      "Notes editor with color themes (clay, olive, slate, amber)",
      "Note pinning and search",
      "Priority levels (low, medium, high) with visual indicators",
      "Due date tracking with overdue and today badges",
      "Category tagging for tasks",
      "Sort by newest, priority, due date, or alphabetical",
      "Data export/import as JSON backup",
      "Dark and light themes",
      "Fully offline — all data stored in browser",
    ],
    live: "https://nara-kc.netlify.app",
    github: "https://github.com/Keemchard/NARA",
  },
  {
    title: "Librong Bulate",
    description:
      "A book discovery web app powered by the Open Library API. Browse daily trending books, explore over 20 subject categories, search for any title, and view detailed book information including descriptions, subjects, and external links.",
    images: [
      "/images/librong-bulate/home.png",
      "/images/librong-bulate/subject.png",
    ],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Open Library API",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "React Router v6",
      "Open Library API",
    ],
    features: [
      "Daily trending books feed from Open Library",
      "Browse by 20 subject categories (Fiction, Sci-Fi, History, etc.)",
      "Full-text book search with result count",
      "Detailed book view with description, subjects, and links",
      "Book cover images with lazy loading",
      "Responsive sidebar navigation with hamburger menu",
      "Link to Open Library for each book",
      "Author and publish year metadata",
    ],
    live: "https://librong-bulate-kc.netlify.app",
    github: "https://github.com/Keemchard/Librong-Bulate",
  },
  {
    title: "C19Data",
    description:
      "A COVID-19 data tracker that displays real-time statistics for every country worldwide. Fetches live data from the disease.sh API and presents it in a searchable, sortable table with detailed per-country breakdowns including cases, deaths, recoveries, and testing data.",
    images: [
      "/images/covid-data/home.png",
    ],
    tags: [
      "React",
      "TypeScript",
      "React Router",
      "REST API",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "React Router v6",
      "disease.sh API",
    ],
    features: [
      "Global COVID-19 statistics table with country flags",
      "Country search by name",
      "Continent filtering (Asia, Europe, Africa, Americas, Oceania)",
      "Multi-column sorting (cases, deaths, recovered, tests, active, population)",
      "Ascending/descending sort toggle",
      "Pagination with configurable page sizes (10, 25, 50)",
      "Detailed per-country view with 12+ data points",
      "Dedicated pages for infected, tested, and recovered stats",
      "Responsive design",
    ],
    live: "https://librong-bulate-kc.netlify.app",
    github: "https://github.com/Keemchard/covid-data",
  },
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
    stack: ["C#", ".NET Framework", "Windows Forms"],
    features: [
      "Pizza ordering system with menu browsing",
      "Order management and tracking",
      "User-friendly desktop interface",
    ],
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
    stack: ["IoT Hardware", "Web Technologies", "CRUD Operations"],
    features: [
      "User authentication (sign up/log in)",
      "Community posts with full CRUD operations",
      "Automated polls and voting system",
      "Monthly flood analysis diagrams",
      "IoT hardware integration for flood monitoring",
    ],
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
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Service information and offerings",
      "Responsive design",
      "Contact information",
    ],
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
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Product browsing and display",
      "Modern responsive design",
      "E-commerce layout and UI",
    ],
    live: "https://zhitshoe.netlify.app/",
    github: "https://github.com/Keemchard/CWD-project-98-",
  },
  {
    title: "New Words To My Ear",
    description:
      "An online program where users can enter newly heard words along with their meaning and pronunciation for others to learn. Supports full CRUD operations on the word entries.",
    images: ["/images/newwords/newWordsAppForportfolio.png"],
    tags: ["Web App", "CRUD", "Educational"],
    stack: ["Web Technologies", "CRUD Operations"],
    features: [
      "Add new words with meaning and pronunciation",
      "Full CRUD operations on word entries",
      "Browse and learn new vocabulary",
    ],
    github: "https://github.com/Keemchard/New-Words-To-My-Ear-App",
  },
];

function ImageSlideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const advance = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
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

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group relative bg-white dark:bg-white/[0.04] border border-gray-100
                 dark:border-white/[0.06] rounded-3xl overflow-hidden
                 hover:border-primary/20
                 transition-colors duration-150 flex flex-col"
    >
      <div className="relative w-full aspect-video bg-dark/5 dark:bg-white/5">
        <ImageSlideshow images={project.images} />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2 className="flex items-center gap-2 text-lg font-medium text-dark dark:text-white">
            {project.title}
            {project.featured && (
              <span
                className="text-[10px] font-medium px-2 py-0.5 rounded
                               bg-primary/10 text-primary border border-primary/20"
              >
                Latest
              </span>
            )}
          </h2>
          <div className="flex gap-2 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-dark/50 dark:text-white/40
                           hover:text-dark/70 dark:hover:text-white/60 hover:bg-dark/5 dark:hover:bg-white/5 transition-colors duration-150"
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
                           hover:text-dark/70 dark:hover:text-white/60 hover:bg-dark/5 dark:hover:bg-white/5 transition-colors duration-150"
                aria-label="Live site"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-dark/65 dark:text-white/55 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        {project.stack && project.stack.length > 0 && (
          <div className="mt-4">
            <p className="text-[11px] font-medium text-dark/40 dark:text-white/30 uppercase tracking-wider mb-2">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-primary/5 dark:bg-primary/10
                             text-primary/80 dark:text-primary/70 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Features (collapsible) */}
        {project.features && project.features.length > 0 && (
          <div className="mt-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-[11px] font-medium text-dark/40 dark:text-white/30
                         uppercase tracking-wider hover:text-primary transition-colors"
            >
              Features ({project.features.length})
              {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
            {expanded && (
              <ul className="mt-2 space-y-1">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-dark/55 dark:text-white/45 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-dark/5 dark:border-white/5">
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
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>

          <div>
            <span className="section-label">Portfolio</span>
            <h1 className="text-3xl md:text-4xl font-semibold text-dark dark:text-white mb-6">
              My Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
