"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Footer from "@/components/Footer";

const education = [
  {
    title: "Elementary",
    place: "Santol Elementary School",
    date: "2006 – 2012",
  },
  {
    title: "Junior High School",
    place: "Tanza National Comprehensive High School",
    date: "2012 – 2016",
  },
  {
    title: "Senior High School",
    place: "Tanza National Trade School",
    date: "2016 – 2018",
  },
  {
    title: "Bachelor of Science in Computer Engineering",
    place: "Cavite State University – CCAT Campus",
    date: "2018 – 2022",
  },
];

const experience = [
  {
    title: "Web Development Training",
    place: "TESDA × MINDTECH Training Development Institute, Inc.",
    date: "August 2021",
    type: "training",
  },
  {
    title: "Creative Web Design Training",
    place: "TESDA × MINDTECH Training Development Institute, Inc.",
    date: "September 2021",
    type: "training",
  },
  {
    title: "Web Developer Intern",
    place: "SQME Professionals Inc.",
    date: "Jul 2022 – Aug 2022",
    type: "internship",
  },
  {
    title: "Software Developer Intern",
    place: "Scrambled Eggs Software Inc. (Booky)",
    date: "Jul 2022 – Aug 2022",
    type: "internship",
  },
  {
    title: "Part-Time Software Engineer",
    place: "Scrambled Eggs Software Inc. (Booky)",
    date: "Sep 2022 – Apr 2023",
    type: "work",
  },
  {
    title: "Full-Time Software Engineer",
    place: "Scrambled Eggs Software Inc. (Booky)",
    date: "Apr 2023 – April 2026",
    type: "work",
  },
  {
    title: "Web Developer",
    place: "Asticom - Acquiro",
    date: "May 2026 – Present",
    type: "work",
    current: true,
  },
];

const typeBadge: Record<string, string> = {
  training: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  internship:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  work: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
};

const typeLabel: Record<string, string> = {
  training: "Training",
  internship: "Internship",
  work: "Full-time",
};

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "C#",
  "Git",
  "Tailwind CSS",

  "Java SE",

  "HTML, CSS",
  "Go",

  "React Native",
  "Angular",
  "Alipay Mini Program",

  "Tailwind CSS",
  "SCSS",
  "MUI (Material-UI)",

  "AWS S3",

  "Git",
  "GitHub",
  "GitLab",

  "Jira",
  "Linear",

  "Google Analytics (GA)",
  "Google Tag Manager",
  "Clevertap",
  "Facebook Pixel",
  "TikTok Pixel",
];

export default function AboutPage() {
  const [tab, setTab] = useState<"education" | "experience">("education");

  return (
    <>
      <main className="min-h-screen pt-16 md:pt-20 pb-24 md:pb-0">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-dark/50 dark:text-white/40
                       hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>

          <section className="mb-10">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
              <div className="flex-1">
                <span className="section-label">About Me</span>
                <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">
                  Keemchard Tamio
                </h1>
                <p className="text-primary font-medium mt-1">
                  Software Engineer
                </p>
                <p className="text-dark/70 dark:text-white/70 leading-relaxed text-sm md:text-base mt-3">
                  Software Engineer with experience in front-end development and
                  building web and mobile applications across different
                  products. Skilled in React, Next.js, JavaScript, TypeScript,
                  and React Native, with hands-on experience developing
                  features, improving user interfaces, and translating business
                  requirements into practical solutions. Experienced in leading
                  front-end development efforts, working with cross-functional
                  teams, and taking mobile applications through the development,
                  testing, and release process. Also involved in technical
                  knowledge sharing and supporting better development practices
                  within the team.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-dark/5 dark:bg-white/5 text-dark/70 dark:text-white/60
                                 text-xs font-medium px-3 py-1.5 rounded-full
                                 border border-dark/10 dark:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/30">
                  <Image
                    src="/images/personal/formal-personal-picture.jpg"
                    alt="Keemchard Tamio"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover object-[center_20%]"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="flex gap-2 p-1 bg-dark/5 dark:bg-white/5 rounded-xl mb-6 w-fit">
            {(["education", "experience"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
                            capitalize transition-all duration-200
                            ${
                              tab === t
                                ? "bg-white dark:bg-dark-bg text-dark dark:text-white shadow-sm"
                                : "text-dark/50 dark:text-white/40 hover:text-dark dark:hover:text-white"
                            }`}
              >
                {t === "education" ? (
                  <GraduationCap size={16} />
                ) : (
                  <Briefcase size={16} />
                )}
                {t}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-dark/10 dark:bg-white/10" />

            <div className="space-y-3 pl-8">
              {(tab === "education" ? education : experience).map((item, i) => (
                <div key={`${item.title}-${i}`} className="relative group">
                  <span
                    className="absolute -left-[22px] top-5 w-3 h-3 rounded-full bg-primary
                               ring-4 ring-white dark:ring-dark-bg transition-all duration-200
                               group-hover:scale-125"
                  />

                  <div
                    className="bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06]
                                rounded-2xl p-5 hover:border-primary/30 dark:hover:border-primary/30
                                transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-dark dark:text-white text-sm leading-snug flex items-center gap-2">
                        {"current" in item &&
                          (item as { current?: boolean }).current && (
                            <span className="relative flex h-2 w-2 shrink-0">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                          )}
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        {"current" in item &&
                          (item as { current?: boolean }).current && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full
                                       bg-primary/10 text-primary border border-primary/20"
                            >
                              CURRENT
                            </span>
                          )}
                        {"type" in item && (
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${typeBadge[(item as { type: string }).type]}`}
                          >
                            {typeLabel[(item as { type: string }).type]}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="flex items-center gap-1.5 text-dark/55 dark:text-white/50 text-xs mt-1">
                      <MapPin size={11} className="shrink-0" />
                      {item.place}
                    </p>
                    <p className="flex items-center gap-1.5 text-dark/40 dark:text-white/30 text-xs mt-1.5">
                      <Calendar size={11} className="shrink-0" />
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
