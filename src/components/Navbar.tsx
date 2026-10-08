"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { User, FolderOpen, Award, Paperclip, MessageSquare, Sun, Moon } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "About",    href: "/#hero",         section: "hero",         icon: User },
  { label: "Projects", href: "/#projects",     section: "projects",     icon: FolderOpen },
  { label: "Certs",    href: "/#certificates", section: "certificates", icon: Award },
  { label: "Resume",   href: "/resume/RESUME - KEEMCHARD TAMIO.pdf", section: "", icon: Paperclip, external: true },
  { label: "Contact",  href: "/#contact",      section: "contact",      icon: MessageSquare },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 20);

      // Find which section's top edge is closest to 30% down the viewport
      const trigger = window.innerHeight * 0.3;
      let best = "";
      let bestDist = Infinity;

      document.querySelectorAll<HTMLElement>("section[id]").forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        // prefer sections whose top is above trigger
        const dist = Math.abs(top - trigger);
        if (top <= trigger + 10 && dist < bestDist) {
          bestDist = dist;
          best = sec.id;
        }
      });

      if (best) setActive(best);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* Desktop top bar */}
      <nav
        className={`hidden md:flex fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? "bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl shadow-md"
            : "bg-light-bg dark:bg-dark-bg"
          }`}
      >
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between w-full">
          <Link
            href="/"
            className="text-xl font-bold text-dark dark:text-white hover:text-primary transition-colors"
          >
            KEEMCHARD
          </Link>

          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = !!item.section && active === item.section;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${isActive
                        ? "text-primary bg-primary/10"
                        : "text-dark dark:text-white/70 hover:text-primary hover:bg-dark/5 dark:hover:bg-white/5"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="ml-2 p-2 rounded-lg text-dark/50 dark:text-white/50
                           hover:text-primary hover:bg-dark/5 dark:hover:bg-white/5
                           transition-all duration-200"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50
                   bg-white dark:bg-[#1a1628]
                   border-t border-gray-200 dark:border-white/10
                   shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      >
        <ul className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const isActive = !!item.section && active === item.section;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl
                              transition-all duration-200 min-w-[52px]
                              ${isActive
                                ? "text-primary"
                                : "text-dark/40 dark:text-white/40"
                              }`}
                >
                  <item.icon size={20} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl
                         text-dark/40 dark:text-white/40 min-w-[52px]
                         transition-all duration-200"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span className="text-[10px] font-medium">Theme</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
