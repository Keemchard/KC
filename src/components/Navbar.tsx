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
      setScrolled(window.scrollY > 60);

      const midpoint = window.innerHeight * 0.5;
      const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
      let best = "";
      for (const sec of sections) {
        if (sec.getBoundingClientRect().top <= midpoint) best = sec.id;
      }
      if (best) setActive(best);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Desktop */}
      <nav
        className={`hidden md:flex fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? "bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-xl shadow-sm"
            : "bg-light-bg dark:bg-dark-bg"
          }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-20 h-16 flex items-center justify-between w-full">
          <Link
            href="/"
            className="text-lg font-bold tracking-[0.15em] text-dark dark:text-white hover:text-primary transition-colors duration-300"
          >
            kc
          </Link>

          <div className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = !!item.section && active === item.section;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={"external" in item ? "_blank" : undefined}
                  rel={"external" in item ? "noopener noreferrer" : undefined}
                  onClick={() => { if (item.section) setActive(item.section); }}
                  className={`relative text-sm font-medium pb-1 transition-all duration-200
                    ${isActive
                      ? "text-dark dark:text-white"
                      : "text-dark/40 dark:text-white/35 hover:text-dark/70 dark:hover:text-white/60"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-full flex items-center justify-center
                         text-dark/35 dark:text-white/35 hover:text-dark dark:hover:text-white
                         transition-colors duration-200"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50
                   bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-xl
                   border-t border-dark/[0.06] dark:border-white/[0.06]"
      >
        <ul className="flex items-center justify-around h-14">
          {navItems.map((item) => {
            const isActive = !!item.section && active === item.section;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={"external" in item ? "_blank" : undefined}
                  rel={"external" in item ? "noopener noreferrer" : undefined}
                  onClick={() => { if (item.section) setActive(item.section); }}
                  className={`flex flex-col items-center gap-0.5 px-3 py-1.5 min-w-[48px]
                              transition-all duration-200
                              ${isActive ? "text-dark dark:text-white" : "text-dark/25 dark:text-white/25"}`}
                >
                  <item.icon size={18} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 min-w-[48px]
                         text-dark/25 dark:text-white/25"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-[10px] font-medium">Theme</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
